import React, { Component } from 'react'
import { Route , Routes , Navigate } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

export class IndexRouter extends Component {
  render() {
    return (
        <Routes>
          <Route path="home" element={<Home/>}>HOME</Route>
          <Route path="about" element={<About/>}>ABOUT</Route>
          {/* redirect */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    )
  }
}

export default IndexRouter

