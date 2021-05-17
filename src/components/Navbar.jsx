import React from "react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header>
      <img src='../../images/logo.png' className='logo' alt='logo' />
      <span className='logo-title'>Tu.be</span>
      <SearchInput />
    </header>
  );
};

export default Navbar;
