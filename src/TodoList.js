import React, { Component } from 'react'
import 'antd/dist/antd.css' // 引入
import TodoListUi from './TodoListUi'
import store from './store'
import { changeInputAction,addItemAction,deleteItemAction } from './store/actionCreate'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUi 
        inputValue ={this.state.inputValue}
        changeInputValue ={this.changeInputValue}
        clickBtn = {this.clickBtn}
        list = {this.state.list}
        deleteItem = { this.deleteItem}
      />
    )
  }
  changeInputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState)
  }
   // 点击添加
   clickBtn() {
     const action = addItemAction()
     store.dispatch(action)
   }
   deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
   }
   
}

export default TodoList
