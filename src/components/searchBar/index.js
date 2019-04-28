import React from 'react';
import { queryDb } from './../../helpers';
import './styles.scss';

const searchBar = (props) => {
  return (
    <section>
      <form>
        <input type="text" id="searchInput" name="searchQuery" placeholder="Search..." />
        <button type="submit" value="Submit" onClick={queryDb}>Search</button>
      </form>
    </section>
  )
}

export default searchBar;
