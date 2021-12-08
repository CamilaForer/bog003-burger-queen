import "../CSS/tab.css";
import { React, useState } from "react";
import ItemMenuChart from './ItemMenu.jsx';
import dataMenu from "../data-menu/menu.json";

const menu = dataMenu.menu;

const TabMenu = ({ itemMenu, setItemMenu , setOrderPrice, orderPrice }) => {
  console.log(itemMenu)
  const [filter, setFilter] = useState("")
  return (
    <div className="tabContainer">
      <div className="lblTab" >
        <label htmlFor="Desayuno">Desayuno</label>
        <label htmlFor="Comidas">Comidas</label>
        <label htmlFor="Bebidas">Bebidas</label>
      </div>
      <section className="content">
        <input type="radio" name="radio" value="Desayuno" onChange={() => setFilter("Desayuno")} id="Desayuno"></input>
        <input type="radio" name="radio" value="Comidas" onChange={() => setFilter("Comidas")} id="Comidas"></input>
        <input type="radio" name="radio" value="Bebidas" onChange={() => setFilter("Bebidas")} id="Bebidas"></input>
        <section className="menuItems">

          {menu.filter((item) => item.type === filter) 
            .map((item) => (
              <ItemMenuChart
                key={item.id}
                itemImg={item.img}
                itemName={item.name}
                itemPrice={item.price}
                itemId={item.id}
                itemMenu={itemMenu}
                setItemMenu={setItemMenu}
                foodType={item.type}
                setOrderPrice={setOrderPrice}
                orderPrice={orderPrice}
              />
            ))}
        </section>
      </section>

    </div>
  );
}

export default TabMenu;