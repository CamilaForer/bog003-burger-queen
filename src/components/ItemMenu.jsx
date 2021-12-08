import React from "react";
import "../CSS/menu.css";
import Modals from "./Modals.jsx";

const ItemMenuChart = ({ itemImg, itemName, itemPrice, itemId, foodType, itemMenu, setItemMenu,setOrderPrice, orderPrice }) => {

  const addItemButtonHandler = () => {

    setItemMenu([...itemMenu, {
      title: itemName,
      price: itemPrice,
      id: itemId,
      additions:[]
    }])
     
    setOrderPrice(orderPrice + itemPrice)
  }
  return (
    <section className="itemMenu">

      <img className="itemImg" src={itemImg} alt={itemName} />
      <p> {itemName} </p>
      <p> ${itemPrice} </p>
      {foodType === "Desayuno" ? (
        <button onClick={addItemButtonHandler} className="addButton" >
          <img className="addImg" src="icons/plusButton.png" alt="add" />
      </button>

      ) : (
        <Modals 
          itemName={itemName}
          itemPrice={itemPrice}
          itemMenu={itemMenu}
          setItemMenu={setItemMenu}
          orderPrice={orderPrice}
          setOrderPrice={setOrderPrice}
        />
      )}
    </section>
  )
};

export default ItemMenuChart;
