import React, { useRef } from "react";
import "./header.css";

const SearchInput = (props) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const keyword = inputRef.current.value;
    keyword && props.onSearch(keyword);
    inputRef.current.value = "";
  };

  return (
    <div className='searchForm'>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type='text'
          placeholder='검색'
          className='inputSearch'
        />
        <button className='searchButton'>Search</button>
      </form>
    </div>
  );
};

export default SearchInput;
