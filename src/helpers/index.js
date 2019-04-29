import React, { Component } from 'react';
import axios from 'axios';


class QueryDb extends Component {
    constructor(props) {
        super(props);
        this.passDataUp = this.passDataUp.bind(this)
    }

    passDataUp(data) {
        const {getQueryResults} = this.props;
        getQueryResults(data=data)
    }

    queryDb(search) {
        let searchString = 'https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query='+search;
        axios.get(searchString).then(response => {
            const results = response.data.results;
            console.log("queryDb results")
            console.log(results[0]);
            this.passDataUp(results);
        });
    };
    //this.queryDb("Life");
    
    render() {
        return (
          <button onClick={() => { this.queryDb(this.props.value) }}>
            Search
          </button>
          <input type="submit" value="Submit" />
        )
    }
}

export default QueryDb;