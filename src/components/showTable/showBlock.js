import React from 'react';

const ShowBlock = (props) => {
    const url = 'https://image.tmdb.org/t/p/w200'+props.img

    const showSelect = () => {
      props.changePageToShow(props.id)
    }

    return (
      <div>
        <img data-test="showIMG" src={url} alt={props.name} onClick={() => {showSelect()}} />
        <a href="http://www.google.com">
          <h3>
            {props.name}
          </h3>
        </a>
      </div>
    );
}

export default ShowBlock