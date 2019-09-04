import React from 'react'
import { Route } from 'react-router-dom'
import HomeList from '../HomeList'
import News from '../News'
import Index from '../Index'
import Profile from '../Profile'
// 导入 antd 组件
import { NavBar, Icon } from 'antd-mobile';
export default class Home extends React.Component{
  render(){
    return(
        <div>
          <Route path="/home/index" component={Index} />
          <Route path="/home/list" component={HomeList} />
          <Route path="/home/news" component={News} />
          <Route path="/home/profile" component={Profile} />
          <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
            >NavBar</NavBar>
          </div>
        </div>
    )
  }
}