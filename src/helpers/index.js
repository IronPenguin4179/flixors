import React, { Component } from 'react';
import axios from 'axios';


class QueryDb extends Component {
    constructor(props) {
        super(props);
        this.passDataUp = this.passDataUp.bind(this)
    }

    passDataUp() {
        const {passUpToApp} = this.props;
        //this.queryDb(this.props.title);
        //passDataUp(this.state);
        passUpToApp("All the way Up")
    }

    state = {
        data: null
    }

    queryDb(props) {
        let searchString = 'https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query='+props.value;
        axios.get(searchString).then(response => {
            const data = response.data.results;
            console.log(data);
            this.setState({data});
        });
    };
    //this.queryDb("Life");
    
    render() {
        return (
          <button onClick={this.passDataUp}>
            Search
          </button>
        )
    }
}

export default QueryDb;