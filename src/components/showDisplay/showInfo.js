import React from 'react';

const ShowInfo = (props) => {
  const data = props.data
  const url = 'https://image.tmdb.org/t/p/w200'+data.poster_path

  return(
      <div>
          <img src={url} alt={data.name}/>
          <h3>{data.name}</h3>
          <p>First aired in: {data.first_air_date}</p>
          <p>Episodes: {data.episode_run_time}</p>
          <p>{data.overview}</p>
      </div>
  )
}

export default ShowInfo