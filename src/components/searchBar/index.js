import React from 'react';
import './styles.scss';

const searchBar = (props) => {
  return (
    <section>
      <form id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search..."
        />
        <button className="searchButton">
          Search
        </button>
      </form>
    </section>
  )
}

export default searchBar;
