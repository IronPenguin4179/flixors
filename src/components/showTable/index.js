import React, { Component } from 'react';
import Logo from './../../assets/graphics/logo.png';
import ShowBlock from './ShowBlock';
import './styles.scss';

class ShowTable extends Component {
  constructor() {
    super()
  }

  render(){
    return (
      <span>
        {this.props.names.map(item => (
          <div className="box" data-test='box' key={item}>
            <ShowBlock name={item} img={Logo}/> 
          </div>
        ))}
      </span>
    );
  };
};

export default ShowTable;