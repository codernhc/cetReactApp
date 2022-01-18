import React, { Component } from 'react';
// import { Button } from 'antd';
import './App.css';
import IndexRouter from './router/Index'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* hello,react */}
        <IndexRouter></IndexRouter>
      </div>
    )
  }
}
