import React, {useState} from "react";

const QuantifyOrder = ({setOrderPrice,price,orderPrice}) => {
  const [counter, setCounter] = useState(1);
  const substractItem = () => {
    if (counter === 1) {
      setCounter(99);
      setOrderPrice(price*99)

    } else {
      setCounter(counter - 1);
      setOrderPrice(orderPrice-price)
    }
  };

  const addItem = () => {
    if (counter === 99) {
      setCounter(1);
      setOrderPrice(price*1)
    } else {
      const plusCounter = (counter+1)
      setOrderPrice(price+orderPrice)
      setCounter(plusCounter);
    }
  }
  
  return (
    <section className="counter">
      <button onClick={substractItem} className="minusButton">
        <img className="counterImg" src="icons/minus.png" alt="add" />
      </button>
      <p id="count">{counter}</p>
      <button onClick={addItem} className="plusButton">
        <img
          className="counterImg"
          src="icons/boton-circular-plus.png"
          alt="add"
        />
      </button>
    </section>
  );
};

export default QuantifyOrder;
