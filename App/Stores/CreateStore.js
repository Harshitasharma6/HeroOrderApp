import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createNetworkMiddleware } from 'react-native-offline';
import createSensitiveStorage from "redux-persist-sensitive-storage";
import FilesystemStorage from 'redux-persist-filesystem-storage'
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import { INITIAL_STATE as VISITOR_INITIAL_STATE } from './Visitor/InitialState';
import { INITIAL_STATE as LEAD_ALERTS_INITIAL_STATE } from './LeadAlerts/InitialState'; 
import { INITIAL_STATE as DEALERS_INITIAL_STATE } from './Dealers/InitialState'; 
import { INITIAL_STATE as INSIGHTS_INITIAL_STATE } from './Insights/InitialState';
import { INITIAL_STATE as SUBDEALERS_INITIAL_STATE } from './SubDealers/InitialState'; 
import { INITIAL_STATE as USER_INITIAL_STATE } from './User/InitialState'; 
import { INITIAL_STATE as PRODUCTS_INITIAL_STATE } from './Products/InitialState'; 





const sensitiveStorage = createSensitiveStorage({
  keychainService: "myKeychain",
  sharedPreferencesName: "mySharedPrefs"
});

//example when you change reducer in live app
// const migrations = {  
//     0: (state) => {    
//         return {      
//           ...state,      
//             user: {        
//               ...state.user,        
//                validation : {
//                 invalid_number: false,
//                 invalid_password: false,
//                 error_message:'' 
//               }
//             }    
//         }  
//     }
// }

    // network: network,
    // common: CommonReducer,
    // user: UserReducer,
    // dashboard: DashboardReducer,
    // actionQueues: ActionQueuesReducer,
    // checkIn: checkInReducer,
    // startDay: StartDayReducer,
    // nonShree: nonShreeReducer,
    // shree: shreeReducer,

    // leadAlerts: leadAlertsReducer,
    // visitor: visitorReducer,
    // products: productsReducer,
    // dealers: dealersReducer,
    // subdealers: subdealersReducer,
    // insights:insightsReducer,


const blacklistPaths = ['network', 'common', 'visitor', 'dealers',  'leadAlerts', 'dashboard', 'checkIn', 'startDay', 'products', 'subdealers', 'insights'];
let blacklistTransform = createTransform(
  (inboundState, key) => {
    if (key === 'visitor') {
      return {
        ...inboundState,
        searchCustomerForm   : VISITOR_INITIAL_STATE.searchCustomerForm,
        feedbackForm         : VISITOR_INITIAL_STATE.feedbackForm,
        registerCustomerForm : VISITOR_INITIAL_STATE.registerCustomerForm,
        loaders              : VISITOR_INITIAL_STATE.loaders
      };
    }else if (key === 'leadAlerts') {
      return {
        ...inboundState,
        loaders              : LEAD_ALERTS_INITIAL_STATE.loaders
      }
    } else if (key === 'products') {
      return {
        ...inboundState,
        loaders              : PRODUCTS_INITIAL_STATE.loaders
      }
    } else if (key === 'dealers') {
      return {
        ...inboundState,
        loaders              : DEALERS_INITIAL_STATE.loaders
      }
    } else if (key === 'insights') {
      return {
        ...inboundState,
        loaders              : INSIGHTS_INITIAL_STATE.loaders
      }
    }else if (key === 'subdealers') {
      return {
        ...inboundState,
        loaders              : SUBDEALERS_INITIAL_STATE.loaders
      }
    }else if (key === 'user') {
      return {
        ...inboundState,
        userLoginIsLoading   : USER_INITIAL_STATE.userLoginIsLoading,
        userLogoutIsLoading   : USER_INITIAL_STATE.userLogoutIsLoading
      }
    } else {
      return inboundState;
    }
  }
);

const persistConfig = {
  key: 'root',
  version: 0,
  storage: FilesystemStorage,
  debug: true,
  //migrate: createMigrate(migrations, { debug: true }),

  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: blacklistPaths,
  transforms: [blacklistTransform]
}


export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
  });

  middleware.push(networkMiddleware);
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware, createLogger()))

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}