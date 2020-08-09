import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	selectActionable: ['payload'],
	selectFollowUp: ['payload']
});

export const LeadAlertTypes = Types
export default Creators


