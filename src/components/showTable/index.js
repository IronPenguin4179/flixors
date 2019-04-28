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
            "Test11","Test12","Test13","Test14","Test15"]
  }

        //  <div data-test="box" className="box">
        //    <ShowBlock name="Test1" img={Logo}/>
        //  </div>

  render(){
    return (
      <span>
        <span>
            {this.state.names.map(item => (
              <div className="box" key={item}> <ShowBlock name={item} img={Logo}/> </div>
            ))}
        </span>
        <span>
          
        </span>
        <span>
        
        </span>
      </span>
    );
  }
};

export default ShowTable;