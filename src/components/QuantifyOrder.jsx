import React, {useState} from "react";

const QuantifyOrder = () => {
  const [counter, setCounter] = useState(1);
  const substractItem = () => {
    if (counter === 1) {
      setCounter(99);
    } else {
      setCounter(counter - 1);
    }
  };

  const addItem = () => {
    if (counter === 99) {
      setCounter(1);
    } else {
      setCounter(counter + 1);
    }
  }
  
  return (
    <section className="counter">
      <button onClick={substractItem} className="minusButton">
        <img className="counterImg" src="icons/minus.png" alt="add" />
      </button>
      <p>{counter}</p>
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
