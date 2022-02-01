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
    ],
    keyword: ''
  }

  getUserInput = (newInput) => {
    const { information } = this.state
    this.setState({
      information: information.concat({ id: this.id++, ...newInput })
    })
  }

  onRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  itemUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({ information: information.map(info => info.id === id ? { ...info, ...data } : info) })
  }

  onSearch = (keyword) => {
    this.setState({ keyword: keyword })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(info => info.name.indexOf(keyword) !== -1)

    return (
      <>
        <UserInput getUserInput={this.getUserInput} onSearch={this.onSearch} />
        <ListBox data={filteredList} onRemove={this.onRemove} onUpdate={this.itemUpdate} />
      </>
    )
  }
}


export default App;