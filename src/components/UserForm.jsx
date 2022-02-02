import React from 'react';
import * as S from './Style';
import PropTypes from 'prop-types';

export default function UserForm({ name, number, onChange, onSubmit }) {
  return (
    <>
      <S.UserInputBlock>
        <form onSubmit={(e) => onSubmit(e)}>
          <S.Input
            name="name"
            onChange={(e) => onChange(e)}
            placeholder="이름"
            value={name}
          />
          <S.Input
            name="number"
            onChange={onChange}
            placeholder="전화번호"
            value={number}
          />
          <S.Button>등록</S.Button>
        </form>
      </S.UserInputBlock>
    </>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
