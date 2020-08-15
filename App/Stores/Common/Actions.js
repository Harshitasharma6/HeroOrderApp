import { createActions } from 'reduxsauce'
const { Types, Creators } = createActions({
  screenChanged: ['screen'],
  connectionChanged: ['payload'],
  openModal: ['payload'],
  closeModal: null,
  disableModal: null,
  enableModal: null,
  makeProductsSearchableList: ['payload']
})

export const CommonTypes = Types
export default Creators
