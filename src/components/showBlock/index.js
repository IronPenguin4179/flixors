import React from 'react';

const ShowBlock = (props) => {
    const url = 'https://image.tmdb.org/t/p/w200'+props.img

    // Handles callback to App
    const showSelect = () => {
      props.changePageToShow(props.id)
    }

    return (
      <div>
        <img className="showInfoLink" src={url} alt={props.name} onClick={() => {showSelect()}} />
          <h3 onClick={() => {showSelect()}}>
            {props.name}
          </h3>
      </div>
    );
}

export default ShowBlock