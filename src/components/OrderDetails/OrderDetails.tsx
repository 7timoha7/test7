import React from 'react';
import {MenuData} from "../../types";
import TotalOrder from "../TotalOrder/TotalOrder";
import './OrderDetails.css';

interface Props {
  menuArray: MenuData[];
  btnDelete: (name: string) => void;
}

const OrderDetails: React.FC<Props> = (props) => {
  const print = () => {
    return props.menuArray.map((item) => {
      if (item.mount > 0) {
        return (
          <div key={item.name + 1} className='order-box'>
            <img className='img-mini' src={item.image} alt={item.name}/>
            <span>{item.name}</span>
            <span>x{item.mount}</span>
            <button className='btn-delete' onClick={() => props.btnDelete(item.name)}></button>
          </div>
        )
      } else {
        return null;
      }
    })
  }

  const empty = () => {
    const emptyItem = props.menuArray.reduce((acc) => {
      props.menuArray.forEach(element => {
        if (element.mount > 0) {
          acc++
        }
      })
      return acc;
    }, 0)
    if (!emptyItem) {
      return <p>Order is empty! please add some items!</p>
    }
  }

  return (
    <div className='order-details'>
      {empty()}
      {print()}
      <TotalOrder menuArray={props.menuArray}/>
    </div>
  );
};

export default OrderDetails;