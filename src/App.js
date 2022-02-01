import React, { Component } from 'react'
import './style.css'
import UserInput from './components/UserInput'
import ListBox from './components/ListBox'

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김땡땡',
        number: '010-0000-0001'
      },
      {
        id: 1,
        name: '강땡땡',
        number: '010-0000-0002'
      }
    ]
  }

  getUserInput = (newInput) => {
    const { information } = this.state
    this.setState({
      information: information.concat({ id: this.id++, ...newInput })
    })
  }

  render() {
    return (
      <>
        <UserInput getUserInput={this.getUserInput} />
        <ListBox data={this.state.information} />
      </>
    )
  }
}


export default App;