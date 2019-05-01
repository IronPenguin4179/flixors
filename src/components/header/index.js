import React from 'react';
import SearchBar from './../searchBar';
import Logo from './../../assets/graphics/logo.png';
import './styles.scss';

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <button onClick={() => {props.changePageToTable()}}>
            <img data-test="logoIMG" src={Logo} alt="Logo" />
          </button>
        </div>
        <div className="search">
          <SearchBar allProps={props}/>
        </div>
      </div>
    </header>
  )
}

export default Header