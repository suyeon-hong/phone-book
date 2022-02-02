import React from 'react';
import * as S from './Style';

const ListBox = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((li) => {
          return (
            <S.Li key={li.id}>
              <S.Name>{li.name}</S.Name>
              <S.Number>{li.number}</S.Number>
            </S.Li>
          );
        })}
      </ul>
    </>
  );
};

export default ListBox;
