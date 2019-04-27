import React from 'react';

const ShowBlock = (props) => {
    return (
      <div>
        <button>
          <img data-test="logoIMG" src={props.img} alt="Logo" />
        </button>
        <h1>
          {props.name}
        </h1>
      </div>
    );
}

export default ShowBlock