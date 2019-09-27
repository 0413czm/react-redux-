import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, Get_List} from './actionType'
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const addItemAction = () => ({
  type: ADD_ITEM,
})
export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
export const getListAction = (data) => ({
  type: Get_List,
  data
})