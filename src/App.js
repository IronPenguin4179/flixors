import React, { Component } from 'react';
import Header from './components/header';
import ShowDisplay from './components/showDisplay';
import axios from 'axios';
import './app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      page: false,
      search: "",
      showData: "No show data yet",
      searchData: "No search data yet",
      names: ["Test1","Test2","Test3"]
    };
    this.handleDataCallback = this.handleDataCallback.bind(this);
    this.searchTyping = this.searchTyping.bind(this);
  }
  
  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=fb6a1d3f38c3d97f67df6d141f936f29')
    .then((response) => {this.prepDataForTable(response.data.results)})
    this.setNames(this.state.searchData)
  }
  
  render () {
    return (
      <div className="App">
        <Header getQueryResults={this.handleDataCallback} 
                searchTyping={this.searchTyping} 
                changePageToTable={this.changePageToTable}
                search={this.state.search}/>
        <ShowDisplay changePageToShow={this.changePageToShow}
                   searchData={this.state.searchData} 
                   showData={this.state.showData}
                   names={this.state.names} 
                   page={this.state.page}/>
      </div>
    );
  }
  
  showSelect(id) {
    axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=fb6a1d3f38c3d97f67df6d141f936f29')
    .then((response) => {
      this.setState({showData: response.data})
    })
  }

  prepDataForTable = (data) => {
    const newNames = this.setNames(data);
    this.setState({names: newNames, searchData: data})
  }

  prepDataForShow = (data) => {
    this.setState({showData: data})
  }

  changePageToTable = () => {
    this.setState({page: false, showData:""})
  }

  changePageToShow = (id) => {
    this.showSelect(id);
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
    this.setState({searchData: data, names: this.setNames(data)})
    console.log(this.state.names)
  }
  searchTyping(msg) {
    this.setState({search: msg});
  }
}

export default App;
