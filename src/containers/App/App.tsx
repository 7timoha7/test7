import React from 'react';
import './App.css';
import {MenuData} from "../../types";
import Menu from  "../../components/Menu/Menu"

const menuArray:MenuData[] = [
  {name: 'Hamburger', price: 80, mount: 0},
  {name: 'Cheeseburger', price: 90, mount: 0},
  {name: 'Fries', price: 45, mount: 0},
  {name: 'Coffee', price: 70, mount: 0},
  {name: 'Tea', price: 50, mount: 0},
  {name: 'Cola', price: 40, mount: 0},
]

function App() {
  return (
    <div className="App">

      <div className='order-details'>


      </div>




      <div className='add-items'>
        <Menu menuArray={menuArray}/>
      </div>
    </div>
  );
}

export default App;
