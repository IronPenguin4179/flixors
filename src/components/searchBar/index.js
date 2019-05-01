import React from 'react';
import axios from 'axios';
import './styles.scss';

const SearchBar = (props) => {

  // Handles callback to App and queries database for searched info
  const handleQuery = (event) => {
      event.preventDefault();
      const searchString = 'https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query='+props.allProps.search;
      axios.get(searchString).then(response => {
          const results = response.data.results;
          console.log("queryDb successful.")
          props.allProps.getQueryResults(results);
      });
  };

  // Handles change callback
  const handleChange = (event) => {
    props.allProps.searchTyping(event.target.value)
  }
  
  return (
    <section>
      <form onSubmit={handleQuery}>
        <input type="text" value={props.allProps.search} onChange={handleChange} />
        <input type="submit" value="Submit" onClick={props.allProps.changePageToTable}/>
      </form>
    </section>
  )
}

export default SearchBar;