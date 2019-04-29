import React, { Component } from 'react';
import Logo from './../../assets/graphics/logo.png';
import ShowBlock from './ShowBlock';
import './styles.scss';

class ShowTable extends Component {
  render(){
    return (
      <span>
        {this.props.names.map((item, index) => (
          <div className="box" data-test='box' key={index}>
            <ShowBlock key={item.show_id} name={item.name} img={item.poster_path}/> 
          </div>
        ))}
      </span>
    );
  };
};

export default ShowTable;