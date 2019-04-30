import React, { Component } from 'react';
import ShowBlock from './ShowBlock';
import './styles.scss';

class ShowTable extends Component {
  render(){
    if(this.props.page === false)
      return (
        <span>
          {this.props.names.map((item, index) => (
            <div className="box" data-test='box' key={index}>
              <ShowBlock id={item.show_id} name={item.name} img={item.poster_path} changePageToShow={this.props.changePageToShow}/> 
            </div>
          ))}
        </span>
      );
    else
      return (
        <h1>Kawaii</h1>
      )
  };
};

export default ShowTable;