import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createNetworkMiddleware } from 'react-native-offline';
import createSensitiveStorage from "redux-persist-sensitive-storage";
import FilesystemStorage from 'redux-persist-filesystem-storage'
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import { INITIAL_STATE as SHREE_INITIAL_STATE } from './Shree/InitialState';
import { INITIAL_STATE as DASHBOARD_INITIAL_STATE } from './Dashboard/InitialState';
import { INITIAL_STATE as NON_SHREE_INITIAL_STATE } from './NonShree/InitialState';
import { INITIAL_STATE as VISITOR_INITIAL_STATE } from './Visitor/InitialState';


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




const blacklistPaths = ['network', 'common'];
let blacklistTransform = createTransform(
  (inboundState, key) => {
    if (key === 'visitor') {
      return {
        ...inboundState,
        searchCustomerForm: VISITOR_INITIAL_STATE.searchCustomerForm,
        feedbackForm: VISITOR_INITIAL_STATE.feedbackForm,
        registerCustomerForm: VISITOR_INITIAL_STATE.registerCustomerForm
      };
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
