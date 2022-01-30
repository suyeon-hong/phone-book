import React, { useState } from 'react'
import './style.css'

function App() {
  const [userName, setUserName] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const [list, setList] = useState([])
  const checkName = (e) => {
    setUserName(e.target.value)
  }
  const checkNumber = (e) => {
    setUserNumber(e.target.value)
  }
  const changeHandler = (e) => {
    e.preventDefault()

    if (userName === '' || userNumber === '') {
      alert('값을 입력해 주세요.')
      return
    }
    setList((current) => {
      setList([...current, { name: userName, number: userNumber }])
    })
    setUserName('')
    setUserNumber('')
  }
  return (
    <>
      <div className='userInput'>
        <form>
          <input className='input' type="text" value={userName} onChange={checkName} placeholder='이름' />
          <input className='input' type="text" value={userNumber} onChange={checkNumber} placeholder='전화번호' />
          <button className='btn' onClick={changeHandler}>등록</button>
        </form>
        <input className='input' type="text" placeholder='검색 할 이름을 입력하세요' />
      </div>
      <ul className='listBox'>
        {list && list.map((li) => {
          return (
            <li className='list' key={li.name}>
              <h1 className='name'>{li.name}</h1>
              <p className='number'>{li.number}</p>
              <button className='btn'>수정</button>
              <button className='btn'>삭제</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}


export default App;