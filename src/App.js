import React from 'react';
import './App.css';
import { HashRouter as Router,  Route } from 'react-router-dom'
import Home from '../page/home'
const App = () =>{
  return(
    <Router>
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default App;
