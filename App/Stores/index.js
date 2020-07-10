import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as CommonReducer } from './Common/Reducers'
import { reducer as network } from 'react-native-offline';
import { reducer as UserReducer } from './User/Reducers'
import { reducer as ActionQueuesReducer } from './ActionQueues/Reducers'
import { reducer as DashboardReducer } from './Dashboard/Reducers'
import { reducer as InfluencerReducer } from './Influencers/Reducers'
import { reducer as SiteReducer } from './Sites/Reducers'
import { reducer as checkInReducer} from './CheckIn/Reducers'
import { reducer as StartDayReducer } from './StartDay/Reducers'
import { reducer as shreeReducer} from './Shree/Reducers'
import { reducer as nonShreeReducer} from './NonShree/Reducers'


export default () => {
  const rootReducer = combineReducers({
    network: network,
    common: CommonReducer,
    user: UserReducer,
    dashboard: DashboardReducer,
    actionQueues: ActionQueuesReducer,
    influencers: InfluencerReducer,
    sites: SiteReducer,
    checkIn: checkInReducer,
    startDay: StartDayReducer,
    nonShree: nonShreeReducer,
    shree: shreeReducer,

  });

  return configureStore(rootReducer, rootSaga)
}
