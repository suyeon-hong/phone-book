import React, { Component } from 'react'
import './style.css'
import UserInput from './components/UserInput'
import List from './components/List'

class App extends Component {
  render() {
    return (
      <>
        <UserInput />
        <List />
      </>
    )
  }
}


export default App;