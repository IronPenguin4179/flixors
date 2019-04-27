import React, { Component } from 'react';
import Header from './components/header';
import ShowTable from './components/showTable';
import './app.scss'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <ShowTable />
        </section>
      </div>
    );
  }
}

export default App;
