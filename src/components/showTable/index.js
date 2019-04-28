import React, { Component } from 'react';
import Logo from './../../assets/graphics/logo.png';
import ShowBlock from './ShowBlock';
import './styles.scss';

class ShowTable extends Component {
  constructor(props){
    super(props);
  }

  state = {
    names: ["Test1","Test2","Test3", "Test4","Test5",
            "Test6","Test7","Test8","Test9","Test10",
            "Test11","Test12","Test13","Test14","Test15"],
  }

  render(){
    return (
      <span>
        {this.state.names.map(item => (
          <div className="box" data-test='box' key={item}>
            <ShowBlock name={item} img={Logo}/> 
          </div>
        ))}
      </span>
    );
  }
};

export default ShowTable;