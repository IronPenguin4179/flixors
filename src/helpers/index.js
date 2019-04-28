import axios from 'axios';

export const queryDb = (props) => {
    let searchString = 'https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&query='+props.value;
    axios.get(searchString).then(response => console.log(response.data));
};