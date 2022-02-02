import React from 'react';
import * as S from './Style';
import PropTypes from 'prop-types';

export default function UserForm({
  name,
  number,
  onChange,
  onSubmit,
  onSearch,
}) {
  return (
    <>
      <S.UserInputBlock>
        <form onSubmit={onSubmit}>
          <S.Input
            name="name"
            onChange={onChange}
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
        <S.Input placeholder="이름을 검색하세요" onChange={onSearch} />
      </S.UserInputBlock>
    </>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
