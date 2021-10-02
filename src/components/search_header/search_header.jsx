import styles from './search_header.module.css';

import React, { useRef } from 'react';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Youtube</h1>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='내용을 입력하세요.'
        onKeyPress={onKeyPress}
      ></input>
      <button className={styles.button} type='submit' onClick={onClick}>
        검색
      </button>
    </header>
  );
};

export default SearchHeader;
