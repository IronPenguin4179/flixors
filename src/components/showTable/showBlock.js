import React from 'react';

const ShowBlock = (props) => {
    const url = 'https://image.tmdb.org/t/p/w200'+props.img
    console.log(props.img)

    return (
      <div>
          <img data-test="logoIMG" src={url} alt="Logo" />
        <h1>
          {props.name}
        </h1>
      </div>
    );
}

export default ShowBlock