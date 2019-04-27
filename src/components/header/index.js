import React from 'react';
import SearchBar from './../searchBar';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
              <div className="logo">
                <img data-test="logoIMG" src={Logo} alt="Logo" />
              </div>
              <div className="search">
                <SearchBar />
              </div>
            </div>
        </header>
    )
}

export default Header