import React from 'react'
import './style.css'

function App() {
  return (
    <>
      <div className='userInput'>
        <form>
          <input className='input' type="text" placeholder='이름' />
          <input className='input' type="text" placeholder='전화번호' />
          <button className='btn'>등록</button>
        </form>
        <input className='input' type="text" placeholder='검색 할 이름을 입력하세요' />
      </div>
      <ul className='listBox'>
        <li className='list'>
          <h1 className='name'>김민준</h1>
          <p className='number'>010-0000-0000</p>
          <button className='btn'>수정</button>
          <button className='btn'>삭제</button>
        </li>
      </ul>
    </>
  )
}


export default App;