import React,{useState} from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "../CSS/Modal.css";
import "../CSS/menu.css";
import AditionItems from "./itemAdittions";

// Comando _rafce
const Modals = ({ itemName, itemPrice, itemMenu, setItemMenu, orderPrice, setOrderPrice }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [additionItem, setAdditionItem] = useState([]);

  const addOrder =() =>{
    setItemMenu([...itemMenu, {
      title: itemName,
      price: itemPrice,
      additions: additionItem 
      
    }])
    setOrderPrice(orderPrice + itemPrice)
    closeModal1()
  }
  return (
    <section>
      <button className="addButton" onClick={openModal1}>
        <img className="addImg" src="icons/plusButton.png" alt="add" />
      </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} tittle="Adiciones">
        <section className="additional-menu">
          <AditionItems
            foodType="Adiciones"
            itemOrderName={itemName}
            itemOrderPrice={itemPrice}
            itemMenu={itemMenu}
            setItemMenu={setItemMenu}
            additionItem={additionItem}
            setAdditionItem={setAdditionItem}
            orderPrice={orderPrice}
            setOrderPrice={setOrderPrice}
          />
        </section>
        <section className="food-add">
          
          <button className="acept" onClick={addOrder}>
            Aceptar
          </button>
        </section>
      </Modal>
    </section>
  );
};

export default Modals;
