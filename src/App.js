import React, { Component } from 'react'
import UserForm from './components/UserForm'
import ListBox from './components/ListBox'

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-000-0000'
      },
      {
        id: 1,
        name: '고길동',
        phone: '010-000-0001'
      }
    ]
  }

  onSubmit = (data) => {
    const { information } = this.state
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  onRemove = (id) => {
    const { information } = this.state
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  onUpdate = (id, data) => {
    const { information } = this.state
    console.log(id, data)
    this.setState({
      information: information.map(info => info.id === id ? { id: id, ...data } : info)
    })
  }

  render() {
    const { information } = this.state;

    return (
      <>
        <UserForm onSubmit={this.onSubmit} />
        <ListBox data={information} onRemove={this.onRemove} onUpdate={this.onUpdate} />
      </>
    )
  }
}


export default App;