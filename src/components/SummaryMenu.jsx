import React from "react";
import "../index.css";
import "../CSS/menu.css";
import QuantifyOrder from "../components/QuantifyOrder";
import { FaTrashAlt } from "react-icons/fa";

const MenuListSummary = ({ itemMenu }) => {
  return (
    <table className="menuListSummary">
      <thead>
        <tr className="menuListHeader">
          <th>Nº items</th>
          <th colSpan="4">Pedido</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {itemMenu.map((item) => (
          <>
            <tr className="principalOrder" key={item.id}>
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
            {item.additions.map((item) => (
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
        ))}
      </tbody>
    </table>
  );
};

export default MenuListSummary;
