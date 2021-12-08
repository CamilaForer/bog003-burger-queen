import React from "react";
import "../CSS/menu.css";
import { FaTrashAlt } from "react-icons/fa";
import QuantifyOrder from "../components/QuantifyOrder";

const ItemOrder = ({
  buttonAction,
  price,
  title,
  counter,
  setCounter,
  key,
  additions
}) => {
  return (
    <>
      <tr className="principalOrder" key={key}>
        <td>
          <QuantifyOrder counter={counter} setCounter={setCounter} />
        </td>
        <td colSpan="4"> {title}</td>
        <td colSpan="1"> ${price}</td>
        <td colSpan="1">
          <button id={key} onClick={buttonAction} className="trash-btn">
            <i>
              <FaTrashAlt />
            </i>
          </button>
        </td>
      </tr>
      {additions.map((item) => (
        <tr key={item.id}>
          <td>
            <QuantifyOrder />
          </td>
          <td colSpan="4"> {item.title}</td>
          <td colSpan="1"> ${item.price}</td>
          <td colSpan="1">
            <button id={item.id} className="trash-btn">
              <i>
                <FaTrashAlt />
              </i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ItemOrder;
