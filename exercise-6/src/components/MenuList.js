import React from 'react'
import "./Menu.css";
import MenuItem from "./MenuItem"
import AddItem from "./AddItem";
import { useState } from "react";


const menu = [
    {
      id: 1,
      name: "hamburger",
      price: 9,
    },
    {
      id: 2,
      name: "pizza",
      price: 12,
    },
    {
      id: 3,
      name: "meatballs",
      price: 10,
    },
  ];


const MenuList = (props) => {
    const [menuItems, setMenuItems] = useState(menu);

    const removeHandler = (id) => {
      console.log("Clicked " + id);
      setMenuItems((prevMenuItems) =>
        prevMenuItems.filter((item) => {
          return item.id !== id;
        })
      );
    };


  return (
    <div>
      <div className='menu'>
       <div className="menu">
       <h1> Baraka's Restaurant </h1>
       <ul className='menu'>
        {menuItems.map((item) => (
          <MenuItem
            removeHandler={removeHandler}
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
        </ul>
       </div>
       </div>

       <div className="menu">
        <AddItem setMenuItems={setMenuItems}/>
      </div>


    </div>


  )
}

export default MenuList