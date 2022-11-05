import React from 'react';
import {MenuData} from "../../types";
import './TotalOrder.css'

interface Props {
  menuArray: MenuData[];
}

const TotalOrder: React.FC<Props> = (props) => {

  const price = props.menuArray.reduce((acc, price) => {
    acc += price.mount * price.price;
    return acc
  }, 0);

  return (
    <div className='total-order'>
      <span>{price} som</span>
    </div>
  );
};

export default TotalOrder;