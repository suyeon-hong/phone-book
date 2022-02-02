import React, { useState, useRef } from 'react'
import './style.css'
import UserForm from './components/UserForm'
import ListBox from './components/ListBox'

const App = () => {
  const currentId = useRef(2)
  const [keyword, setKeyword] = useState('')
  const [userInput, setUserInput] = useState({
    name: '',
    number: ''
  })
  const [list, setList] = useState([
    {
      id: 1,
      name: '홍길동',
      number: '010-0000-0001'
    }
  ])

  const onChange = (e) => {
    const { name, value } = e.target
    setUserInput(input => ({ ...input, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setList(list => list.concat({ id: currentId.current, ...userInput }))
    setUserInput({
      name: '',
      number: ''
    })
    currentId.current += 1;
  }

  const onRemove = (id) => {
    setList(list => list.filter(li => li.id !== id))
  }

  const onUpdate = (id, data) => {
    setList(list => list.map(li => li.id === id ? { ...li, ...data } : li))
  }

  const onSearch = (e) => {
    setKeyword(e.target.value)
  }

  const { name, number } = userInput
  const filterdList = list.filter(li => li.name.indexOf(keyword) !== -1)
  return (
    <>
      <UserForm onChange={onChange} onSubmit={onSubmit} name={name} number={number} onSearch={onSearch} />
      <ListBox list={filterdList} onRemove={onRemove} onUpdate={onUpdate} />
    </>
  )
}

export default App