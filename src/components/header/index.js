import React, { Component } from 'react';
import SearchBar from './../searchBar';
import Logo from './../../assets/graphics/logo.png';
import './styles.scss';

class Header extends Component {
    render() {
      return (
        <header data-test="headerComponent">
            <div className="wrap">
              <div className="logo">
                <button>
                  <img data-test="logoIMG" src={Logo} alt="Logo" />
                </button>
              </div>
              <div className="search">
                <SearchBar allProps={this.props}/>
              </div>
            </div>
        </header>
      )
    }
}

export default Header