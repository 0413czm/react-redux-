import React from 'react';
import { Input, Button, List } from 'antd'
const todoListUi = (props) => {
  return ( 
    <div style={{ margin: '10px' }}>
    <div>
      <Input
        placeholder={props.inputValue}
        style={{ width: '250px', marginRight: '10PX' }}
        onChange={props.changeInputValue}
        value={props.inputValue}
      />
      <Button 
      type="primary"
      onClick={props.clickBtn}
      >点击添加事务</Button>
    </div>
    <div style={{ margin: '10px', width: '300px' }}>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item,index) => <List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>}
      ></List>
    </div>
  </div>
   );
}
export default todoListUi;