import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, Get_List } from './actionType'
const defaultState = {
  inputValue: 'write something',
  list: ['任务一', '任务二', '任务三']
}
export default (state = defaultState, action) => {
  // Reducer里面只能接收state不能改变
  if (action.type === CHANGE_INPUT) {
    // 进行改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    // 进行改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_ITEM) {
    // 进行改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === Get_List) {
    // 进行改变
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data.list
    return newState
  }
  return state
}
