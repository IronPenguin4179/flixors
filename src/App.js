import React, { Component } from 'react';
import Header from './components/header';
import ShowTable from './components/showTable';
import './app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.searchTyping = this.searchTyping.bind(this);
  }
  
  state = {
    page: "table",
    search: "Life",
    data: "No data yet",
    names: ["Test1","Test2","Test3", "Test4","Test5",
          "Test6","Test7","Test8","Test9","Test10",
          "Test11","Test12","Test13","Test14","Test15"]
  };
  handleDataCallback = (data) => {
    this.setState({data})
    this.setState({page: "Bar"});
    //this.stater("Bar");
    this.myState();
  }

  stater(msg) {
    this.setState({page: msg});
    alert(this.state.page)
  }

  myState = () => {
    this.setState({page: "Foo"})
    console.log(this.state)
  }
 
  searchTyping(msg) {
    this.setState({search: msg});
  }

  render () {
    return (
      <div className="App">
        <button onClick={ () => {this.myState()} }>Name</button>
        <Header getQueryResults={this.handleDataCallback} searchTyping={this.searchTyping} search={this.state.search}/>
      </div>
    );
  }
}

export default App;
      //  <section className="main">
      //    <ShowTable names={this.state.names} results={this.state.data}/>
      //  </section>
