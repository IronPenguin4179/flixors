import React from 'react';

const ShowInfo = (props) => {
  const url = 'https://image.tmdb.org/t/p/w200'+props.data.poster_path
  const data = props.data
  return(
      <div>
          <img src={url} />
          <h3>{data.name}</h3>
          <p>Created By: {data.id}</p>
          <p>First aired in: {data.first_air_date}</p>
          <p>Episodes: {data.episode_run_time}</p>
          <p>{data.overview}</p>
      </div>
  )
}

export default ShowInfo