import React, { Component } from 'react';
import SearchBar from './../searchBar';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

class Header extends Component {
    constructor (props) {
      super(props)
      this.doesThing = this.doesThing.bind(this)
    }
    
    doesThing(event) {
      event.preventDefault();
      const {dataCallback} = this.props;
      dataCallback("Hello world.");
    }
    render() {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
              <div className="logo">
                <button onClick={this.doesThing}>
                  <img data-test="logoIMG" src={Logo} alt="Logo" />
                </button>
              </div>
              <div className="search">
                <SearchBar />
              </div>
            </div>
        </header>
    )
    }
}

export default Header