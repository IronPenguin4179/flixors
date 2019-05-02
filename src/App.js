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
  
  // Sets up initial call to database for popular shows.
  componentWillMount() {
    this.resetSearchData()
  }
  
  render () {
    return (
      <div className="App">
        <div className="Header">
          <Header getQueryResults={this.handleDataCallback} 
                searchTyping={this.searchTyping} 
                changePageToTable={this.changePageToTable}
                search={this.state.search}/>
        </div>
        <div className="ShowDisplay">
          <ShowDisplay changePageToShow={this.changePageToShow}
                   searchData={this.state.searchData} 
                   showData={this.state.showData}
                   names={this.state.names} 
                   page={this.state.page} />
        </div>
      </div>
    );
  }

  // Sets page to false and resets show data to popular items.
  resetSearchData = () => {
    axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=fb6a1d3f38c3d97f67df6d141f936f29')
    .then((response) => {
      const newNames = this.setNames(response.data.results);
      this.setState({names: newNames, searchData: response.data.results})
    })
  }
  
  // Resets search data and page display 
  changePageToTable = () => {
    this.resetSearchData()
    this.setState({page: false})
  }
  
  // Searches for specified show and changes page state to true allowing ShowDisplay to render the shows ShowInfo
  changePageToShow = (id) => {
    axios.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=fb6a1d3f38c3d97f67df6d141f936f29')
    .then((response) => {
      this.setState({showData: response.data})
    })
    this.setState({page: true})
  }

  // Reorganizes searchData for presetation by ShowDisplay
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

  // Used for retreiving data from the SearchBar query.
  handleDataCallback = (data) => {
    this.setState({searchData: data, names: this.setNames(data)})
  }

  // Updates onChanges from searchBar
  searchTyping(msg) {
    this.setState({search: msg});
  }
}

export default App;