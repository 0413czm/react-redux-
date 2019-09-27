import React, { Component } from 'react'
import 'antd/dist/antd.css' // 引入
import TodoListUi from './TodoListUi'
import store from './store'
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction
} from './store/actionCreate'

import axios from 'axios'
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
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    )
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  // 生命周期函数
  componentDidMount() {
    axios
      .get(
        'https://www.easy-mock.com/mock/5d8d791b08f5d9044bdb103a/getData/getlist'
      )
      .then(res => {
        const data = res.data
        const action = getListAction(data)
        store.dispatch(action)
      })
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
