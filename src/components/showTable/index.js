import React, { Component } from 'react';
import Logo from './../../assets/graphics/logo.png';
import ShowBlock from './ShowBlock';
import './styles.scss';

class ShowTable extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <span>
        <span>
          <div data-test="box" className="box">
            <ShowBlock name="Test1" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test2" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test3" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test4" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test5" img={Logo}/>
          </div>
        </span>
        <span>
          <div data-test="box" className="box">
            <ShowBlock name="Test1" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test2" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test3" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test4" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test5" img={Logo}/>
          </div>
        </span>
        <span>
          <div data-test="box" className="box">
            <ShowBlock name="Test1" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test2" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test3" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test4" img={Logo}/>
          </div>
          <div data-test="box" className="box">
            <ShowBlock name="Test5" img={Logo}/>
          </div>
        </span>
      </span>
    );
  }
};

export default ShowTable;