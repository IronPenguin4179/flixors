import React, { Component } from 'react';
import Header from './components/header';
import ShowTable from './components/showTable';
import './app.scss'

class App extends Component {
  handleDataCallback(msg) {
    alert(msg);
  }

  render () {
    return (
      <div className="App">
        <Header key={1} id={3} dataCallback={this.handleDataCallback}/>
        <section className="main">
          <ShowTable />
        </section>
      </div>
    );
  }
}

export default App;
