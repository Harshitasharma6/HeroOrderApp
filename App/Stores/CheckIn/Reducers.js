import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CheckInTypes } from './Actions'


export const counterVisitAction = (state) => ({
    ...state,
    showHideCounter: !state.showHideCounter,
});

// export const influencerVisitAction = (state) => ({
//     ...state
// });

// export const siteVisitAction = (state) => ({
//     ...state
// });

// export const shreeCounterAction = (state) => ({
//     ...state
// });

// export const nonShreeCounterAction = (state) => ({
//     ...state
// });




export const reducer = createReducer(INITIAL_STATE, {

    [CheckInTypes.COUNTER_VISIT_ACTION]: counterVisitAction,
    // [CheckInTypes.INFLUENCER_VISIT_ACTION]: influencerVisitAction,
    // [CheckInTypes.SITE_VISIT_ACTION]: siteVisitAction,
    // [CheckInTypes.SHREE_COUNTER_ACTION]: shreeCounterAction,
    // [CheckInTypes.NON_SHREE_COUNTER_ACTION]: nonShreeCounterAction
});