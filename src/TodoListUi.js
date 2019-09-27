import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
class todoListUi extends Component {
  
  render() { 
    return ( 
      <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder={this.props.inputValue}
          style={{ width: '250px', marginRight: '10PX' }}
          onChange={this.props.changeInputValue}
          value={this.props.inputValue}
        />
        <Button 
        type="primary"
        onClick={this.props.clickBtn}
        >点击添加事务</Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => <List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>}
        ></List>
      </div>
    </div>
     );
  }
}
 
export default todoListUi;