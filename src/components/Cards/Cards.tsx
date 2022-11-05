import React from 'react';
import {MenuData} from "../../types";
import './Cards.css';

interface Props {
  menuArray: MenuData[];
  btnDelete: (name: string) => void;
}

const Cards: React.FC<Props> = (props) => {
  return (
    <div className='menu-box'>
      {props.menuArray.map((item) => {
        return (
          <div className='item-box' key={item.name + 1} onClick={() => props.btnDelete(item.name)}>
            <img src={item.image} alt={item.name}/>
            <p>{item.name}</p>
            <p>{item.price} som</p>
          </div>
        )
      })}
    </div>
  );
};

export default Cards;