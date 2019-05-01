import React from 'react';
import ShowBlock from '../showBlock/index';
import ShowInfo from '../showInfo/index';
import './styles.scss';

const ShowTable = (props) => {
  if(props.page === false)

    return (
      <span>
        {props.names.map((item, index) => (
          <div className="box" data-test='box' key={index}>
            <ShowBlock id={item.show_id} name={item.name} img={item.poster_path} changePageToShow={props.changePageToShow}/> 
          </div>
        ))}
      </span>
    );
  else

    return (
      <ShowInfo data={props.showData} />
    )
};

export default ShowTable;