import React from 'react';
import queryDb from '../queryDb/index';
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
        <button className="searchButton" onClick={queryDb('Life')}>
          Search
        </button>
      </form>
    </section>
  )
}

export default searchBar;
