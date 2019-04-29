import React, { Component } from 'react';
import QueryDb from './../../helpers';
import './styles.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.doesThing = this.doesThing.bind(this)
  }
  
  doesThing() {
    const {passUpToApp} = this.props;
    passUpToApp("Hello friggin world.");
  }

  handleDataCallback(msg) {
    alert(msg.data)
  }

  render() {
    return (
      <section>
        <form>
          <input type="text" id="searchInput" name="searchQuery" placeholder="Search..." />
          <QueryDb passUpToApp={this.props.passUpToApp} value={"Blue+Bloods"} />
        </form>
        <button onClick={this.doesThing}>THINGS</button>
      </section>
    )
  }
}

export default SearchBar;
