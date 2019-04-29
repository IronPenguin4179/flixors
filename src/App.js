import React, { Component } from 'react';
import Header from './components/header';
import ShowTable from './components/showTable';
import axios from 'axios';
import './app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: "table",
      search: "Life",
      rawData: "No data yet",
      names: ["Test1","Test2","Test3"]
    };
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.searchTyping = this.searchTyping.bind(this);
  }
  
  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query=Life')
        .then((response) => this.prepData(response.data.results))
    this.setNames(this.state.rawData)
    console.log("First")
  }

  prepData = (data) => {
    const newNames = this.setNames(data);
    this.setState({names: newNames, rawData: data})
  }

  setNames = (list) => {
    const newNames = [];
    for (let i=0;i<list.length;i++) {
      newNames.push({
        id: i, 
        name: list[i].name, 
        show_id: list[i].id,
        poster_path: list[i].poster_path
      })
    };
    return newNames;
  }

  handleDataCallback = (data) => {
    this.setState({rawData: data})
    this.setState({page: "Bar"});
    this.myState();
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
        <section className="main">
          <ShowTable data={this.state.data} names={this.state.names}/>
        </section>
      </div>
    );
  }
  }

export default App;
