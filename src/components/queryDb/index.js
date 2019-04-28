import axios from 'axios';

const queryDb = (props) => {
    let searchString = 'https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query='+props;
    axios.get(searchString).then(response => console.log(response.data.results[0].id));
      //.then(response => this.setState({title: response.data.results[0].id}));
      //console.log(this.state.title)
}

export default queryDb;