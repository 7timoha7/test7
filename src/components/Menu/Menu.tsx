import React from 'react';
import {MenuData} from "../../types";
import './Menu.css'
import Cards from "../Cards/Cards";

interface Props {
  menuArray: MenuData[];
  btnDelete: (name: string) => void;
}

const Menu: React.FC<Props> = (props) => {
  return (
    <div className='add-items'>
      <div>
        <Cards menuArray={props.menuArray} btnDelete={props.btnDelete}/>
      </div>
    </div>
  );
};

export default Menu;