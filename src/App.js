import React from 'react'

// 导入路由的三个组件
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 导入页面组件
import Home from './page/home/index'

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 */}

        {/* 
          /home 路由规则：能够匹配所有以 /home 开头的 pathname
            比如：/home/profile
        */}
        <Route path="/home" component={Home} />
      </div>
    </Router>
  )
}

export default App
