import React, { Component } from 'react';
import Header from './components/header';
import ShowTable from './components/showTable';
import axios from 'axios';
import './app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: false,
      search: "Life",
      searchData: "No data yet",
      names: ["Test1","Test2","Test3"]
    };
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.searchTyping = this.searchTyping.bind(this);
  }
  
  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query=Life')
    .then((response) => {this.prepDataForTable(response.data.results)})
    this.setNames(this.state.searchData)
    console.log("First")
  }
  
  render () {
    return (
      <div className="App">
        <button onClick={ () => {this.myState()} }>Name</button>
        <Header getQueryResults={this.handleDataCallback} 
                searchTyping={this.searchTyping} 
                changePageToTable={this.changePageToTable}
                search={this.state.search}/>
        <ShowTable changePageToShow={this.changePageToShow}
                   data={this.state.data} 
                   names={this.state.names} 
                   page={this.state.page}/>
      </div>
    );
  }
  
  showSelect(id) {
    axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=fb6a1d3f38c3d97f67df6d141f936f29')
    .then((response) => {
      this.prepDataForShow(response.data)
    })
  }

  prepDataForTable = (data) => {
    const newNames = this.setNames(data);
    this.setState({names: newNames, searchData: data})
  }

  prepDataForShow = (data) => {
    this.setState({page: true})
    console.log(data)
  }

  changePageToTable = () => {
    this.setState({page: false})
  }

  changePageToShow = () => {
    this.setState({page: true})
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
    this.setState({searchData: data})
    this.setState({page: "Bar"});
    this.myState();
  }

  myState = () => {
    const v = this.state.searchData[0].id
    this.showSelect(v)
  }
 
  searchTyping(msg) {
    this.setState({search: msg});
  }
}

export default App;
