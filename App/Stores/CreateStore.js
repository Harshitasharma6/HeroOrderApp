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




const blacklistPaths = ['network', 'common', 'visitor'];
let blacklistTransform = createTransform(
  (inboundState, key) => {
 if (key === 'shree') {
      return {
        ...inboundState,
        shreeSearchFilters: SHREE_INITIAL_STATE.shreeSearchFilters,
        fetchShreeLoader: SHREE_INITIAL_STATE.fetchShreeLoader,
        fetchShreeRetailerLoader: SHREE_INITIAL_STATE.fetchShreeRetailerLoader,
        createShreeDealerLoader: SHREE_INITIAL_STATE.createShreeDealerLoader,
        createShreeRetailerLoader: SHREE_INITIAL_STATE.createShreeRetailerLoader,
        updateLocationLoader: SHREE_INITIAL_STATE.updateLocationLoader,
        updatePotentialLoader: SHREE_INITIAL_STATE.updatePotentialLoader,
        fetchOutstandingLoader: SHREE_INITIAL_STATE.fetchOutstandingLoader,
        fetchPaymentsLoader: SHREE_INITIAL_STATE.fetchPaymentsLoader,
        fetchSalesInfoLoader: SHREE_INITIAL_STATE.fetchSalesInfoLoader,
        fetchPreviousVisitsLoader: SHREE_INITIAL_STATE.fetchPreviousVisitsLoader,
        fetchLatestVisitsLoader: SHREE_INITIAL_STATE.fetchLatestVisitsLoader,
        allVisitsLoader: SHREE_INITIAL_STATE.allVisitsLoader,
        allSiteVisitsLoader: SHREE_INITIAL_STATE.allSiteVisitsLoader,
        createShreeVisitDetailLoader: SHREE_INITIAL_STATE.createShreeVisitDetailLoader,
        allCountersLoader: SHREE_INITIAL_STATE.allCountersLoader,
        allDistrictsLoader: SHREE_INITIAL_STATE.allDistrictsLoader,
        submitShreeVisitFormLoader: SHREE_INITIAL_STATE.submitShreeVisitFormLoader
      };
    }else if (key === 'nonShree') {
      return {
        ...inboundState,
        nonShreeSearchFilters: NON_SHREE_INITIAL_STATE.nonShreeSearchFilters,
        fetchNonShreeLoader: NON_SHREE_INITIAL_STATE.fetchNonShreeLoader,
        createNonShreeLoader: NON_SHREE_INITIAL_STATE.createNonShreeLoader,
        submitNonShreeVisitFormLoader: NON_SHREE_INITIAL_STATE.submitNonShreeVisitFormLoader,
        createNonShreeVisitDetailLoader: NON_SHREE_INITIAL_STATE.createNonShreeVisitDetailLoader,
        createCompetitoreLoader: NON_SHREE_INITIAL_STATE.createCompetitoreLoader,
        fetchPreviousVisitsLoader: NON_SHREE_INITIAL_STATE.fetchPreviousVisitsLoader
      };
    } else if (key === 'dashboard') {
      return {
        ...inboundState,
        feedBackForm: DASHBOARD_INITIAL_STATE.feedBackForm,
        sendAttachmentLoader: DASHBOARD_INITIAL_STATE.sendAttachmentLoader,
        feedBackLoader: DASHBOARD_INITIAL_STATE.feedBackLoader,
        outStandingLoader: DASHBOARD_INITIAL_STATE.outStandingLoader,
        fetchCommunicationsLoader: DASHBOARD_INITIAL_STATE.fetchCommunicationsLoader,
        fetchCommunicationsAttachmentsLoader: DASHBOARD_INITIAL_STATE.fetchCommunicationsAttachmentsLoader,
        fetchCommunicationsAttachmentsDetailsLoader: DASHBOARD_INITIAL_STATE.fetchCommunicationsAttachmentsDetailsLoader,
        finalObservationFetchLoader: DASHBOARD_INITIAL_STATE.finalObservationFetchLoader,
        finalObservationSubmitLoader: DASHBOARD_INITIAL_STATE.finalObservationSubmitLoader
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
