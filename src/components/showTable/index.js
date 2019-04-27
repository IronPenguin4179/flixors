import React, { Component } from 'react';
import Logo from './../../assets/graphics/logo.png';
import ShowBlock from './showBlock';
import './styles.scss';

class ShowTable extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <span>
          <div className="box">
            <ShowBlock name="Test1" img={Logo}/>
          </div>
          <div className="box">
            <ShowBlock name="Test2" img={Logo}/>
          </div>
          <div className="box">
            <ShowBlock name="Test3" img={Logo}/>
          </div>
        </span>
        <span>
          <div className="box">
            <ShowBlock name="Test1" img={Logo}/>
          </div>
          <div className="box">
            <ShowBlock name="Test2" img={Logo}/>
          </div>
          <div className="box">
            <ShowBlock name="Test3" img={Logo}/>
          </div>
        </span>
      </div>
    );
  }
}

export default ShowTable;