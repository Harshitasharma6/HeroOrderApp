import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LeadAlertTypes } from './Actions'
import _ from 'lodash';



export const selectFollowUp = (state, { payload }) => {
    return {
        ...state,
        selectedFollowUp: payload
    }
}


export const selectActionable = (state, { payload }) => {
    return {
        ...state,
        selectedActionable: payload
    }
}


export const reducer = createReducer(INITIAL_STATE, {
   	[LeadAlertTypes.SELECT_ACTIONABLE]: selectActionable,
	[LeadAlertTypes.SELECT_FOLLOW_UP] : selectFollowUp
});
