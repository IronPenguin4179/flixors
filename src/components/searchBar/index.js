import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleQuery = this.handleQuery.bind(this);
  }
  
  handleQuery = (event) => {
      event.preventDefault();
      const searchString = 'https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query='+this.props.allProps.search;
      axios.get(searchString).then(response => {
          const results = response.data.results;
          console.log("queryDb results")
          console.log(results[0].name);
          this.props.allProps.getQueryResults(results);
      });
  };

  handleChange = (event) => {
    this.props.allProps.searchTyping(event.target.value)
  }

//this.props.allProps.submitSearch; this.handleQuery
  render() {
    return (
      <section>
        <form onSubmit={this.handleQuery}>
          <input type="text" value={this.props.allProps.search} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </section>
    )
  }
}

export default SearchBar;

       // <form>
       //   <input type="text" id="searchInput" name="searchQuery" placeholder="Search..." />
       // </form>

  