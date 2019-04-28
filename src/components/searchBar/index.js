import React, { Component } from 'react';
import QueryDb from './../../helpers';
import './styles.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleDataCallback(msg) {
    alert(msg.data)
  }

  render() {
    return (
      <section>
        <form>
          <input type="text" id="searchInput" name="searchQuery" placeholder="Search..." />
          <QueryDb dataCallback={this.handleDataCallback} value={"Blue+Bloods"} />
        </form>
      </section>
    )
  }
}

export default SearchBar;
