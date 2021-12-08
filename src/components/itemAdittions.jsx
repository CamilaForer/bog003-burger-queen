import React from "react";
import "../CSS/menu.css";
import dataMenu from "../data-menu/menu.json";

const menu = dataMenu.menu;

const ItemAdittions = ({
  itemImg,
  itemName,
  itemPrice,
  itemMenu,
  setAdditionItem,
  additionItem,
  orderPrice,
  setOrderPrice
}) => {
  
  const addItemButtonHandler = () => {
    setAdditionItem([...additionItem,{
      title: itemName,
      price: itemPrice,
    }])
    setOrderPrice(orderPrice + itemPrice)
  };
  console.log(itemMenu);
  return (
    <section className="itemMenu">
      <img className="itemImg"  src={itemImg} alt={itemName} />
      <p> {itemName} </p>
      <p> ${itemPrice} </p>
      <button onClick={addItemButtonHandler} className="addButton">
        <img className="addImg" id={itemName} src="icons/plusButton.png" alt="add" />
      </button>
    </section>
  );
};

const AditionItems = (props) => {
  return (
    <section className="menuItems">
      {menu
        .filter((item) => item.type === props.foodType)
        .map((item) => (
          <ItemAdittions
            key={item.id}
            itemImg={item.img}
            itemName={item.name}
            itemPrice={item.price}
            itemOrderName={props.itemOrderName}
            itemOrderPrice={props.itemOrderPrice}
            itemMenu={props.itemMenu}
            setItemMenu={props.setItemMenu}
            setAdditionItem={props.setAdditionItem}
            additionItem={props.additionItem}
            orderPrice={props.orderPrice}
            setOrderPrice={props.setOrderPrice}
          />
        ))}
    </section>
  );
};

export default AditionItems;
