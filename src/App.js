import React, { Component } from 'react'
import UserForm from './components/UserForm'

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

  render() {
    return (
      <>
        <UserForm onSubmit={this.onSubmit} />
      </>
    )
  }
}


export default App;