import React, { useState, useRef } from 'react'
import './style.css'
import UserForm from './components/UserForm'
import ListBox from './components/ListBox'

const App = () => {
  const currentId = useRef(3)
  const [userInput, setUserInput] = useState({
    name: '',
    number: ''
  })
  const [list, setList] = useState([
    {
      id: 1,
      name: '홍길동',
      number: '010-0000-0001'
    },
    {
      id: 2,
      name: '홍길자',
      number: '010-0000-0002'
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

  const { name, number } = userInput
  return (
    <>
      <UserForm onChange={onChange} onSubmit={onSubmit} name={name} number={number} />
      <ListBox list={list} />
    </>
  )
}

export default App