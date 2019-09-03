/* 
  项目的入口文件
*/
import React from 'react'
import ReactDOM from 'react-dom'

// 导入antd-mobile的样式
import 'antd-mobile/dist/antd-mobile.css'

// 注意：导入全局样式，注意样式覆盖的问题
import './index.css'

// 导入根组件
import App from './App'

// 渲染根组件
ReactDOM.render(<App />, document.getElementById('root'))
