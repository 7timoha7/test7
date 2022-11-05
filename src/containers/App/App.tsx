import React, {useState} from 'react';
import './App.css';
import Menu from  "../../components/Menu/Menu"
import OrderDetails from "../../components/OrderDetails/OrderDetails";

function App() {

  const [menuArray, setMenuArray] = useState([
    {name: 'Hamburger', price: 80, mount: 0},
    {name: 'Cheeseburger', price: 90, mount: 0},
    {name: 'Fries', price: 45, mount: 0},
    {name: 'Coffee', price: 70, mount: 0},
    {name: 'Tea', price: 50, mount: 0},
    {name: 'Cola', price: 40, mount: 0},
  ])

  const getMount = (name:string)=> {
    setMenuArray(prev => prev.map((item)=>{
      return item.name === name ? {
        ...item,
        mount: item.mount + 1,
      } : item
    }))
}

const btnDelete = (name:string) =>{
    setMenuArray(prev => prev.map((item)=>{
      return item.name === name ? {
        ...item,
        mount: 0,
      } : item
    }))
}

  return (
    <div className="App">
      <div className='order-details'>
        <OrderDetails menuArray={menuArray} btnDelete={btnDelete}/>
      </div>
      <div className='add-items'>
        <Menu menuArray={menuArray} btnDelete={getMount}/>
      </div>
    </div>
  );
}

export default App;
