import React from 'react';
import {MenuData} from "../../types";
import './Menu.css'

interface Props {
  menuArray: MenuData[]
  btnDelete: (name: string) => void;
}

const Menu:React.FC<Props> = (props) => {
const Print = ()=>{
 return  props.menuArray.map((item)=>{
    return (
      <div className='item-box' key={item.name + 1} onClick={()=>props.btnDelete(item.name)}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    )
  })
}

  return (
    <div>
      <div className= 'menu-box'>
        {Print()}
      </div>
    </div>
  );
};

export default Menu;