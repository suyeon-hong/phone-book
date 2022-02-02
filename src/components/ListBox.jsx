import React, { useState } from 'react';
import * as S from './Style';

const List = React.memo(({ info, onRemove, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState({
    name: '',
    number: '',
  });
  const clickHandler = () => {
    if (editing) {
      setEditing(!editing);
      onUpdate(info.id, input);
    } else {
      setEditing(!editing);
      setInput({
        name: info.name,
        number: info.number,
      });
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <S.Li key={info.id}>
      {editing ? (
        <>
          <S.Input
            name="name"
            onChange={changeHandler}
            placeholder="이름"
            value={input.name}
          />
          <S.Input
            name="number"
            onChange={changeHandler}
            placeholder="전화번호"
            value={input.number}
          />
        </>
      ) : (
        <>
          <S.Name>{info.name}</S.Name>
          <S.Number>{info.number}</S.Number>
        </>
      )}
      <S.Button onClick={clickHandler}>수정</S.Button>
      <S.Button onClick={() => onRemove(info.id)}>삭제</S.Button>
    </S.Li>
  );
});

function ListBox({ list, onRemove, onUpdate }) {
  return (
    <ul>
      {list.map((li) => {
        return (
          <List key={li.id} info={li} onRemove={onRemove} onUpdate={onUpdate} />
        );
      })}
    </ul>
  );
}

export default ListBox;
