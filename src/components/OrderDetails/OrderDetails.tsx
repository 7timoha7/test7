import React from 'react';
import {MenuData} from "../../types";

interface Props {
  menuArray: MenuData[];
  btnDelete: (name: string) => void;
}


const OrderDetails: React.FC<Props> = (props) => {
  let totalPrice = 0;
  const print = () => {
    return props.menuArray.map((item)=>{
      if (item.mount > 0){
        totalPrice += item.price * item.mount
        return (
          <div key={item.name + 1}>
            <div>
              <span>{item.name}</span>
              <span>{item.mount}</span>
              <button onClick={()=>props.btnDelete(item.name)}>delete</button>
            </div>
          </div>
        )
      } else {
        return null
      }
    })
  }

  return (
    <div>
      {print()}
      <div>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
};

export default OrderDetails;