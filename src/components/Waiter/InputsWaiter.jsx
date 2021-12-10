import React from "react";

const InputsWaiter = ({
  inputUserName,
  setInputUserName,
  inputTableNum,
  setInputTableNum,
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputUserName((inputUserName = e.target.value));
        }}
        placeholder="Nombre del cliente"
        className="inputName"
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setInputTableNum((inputTableNum = e.target.value));
        }}
        placeholder="N° de mesa"
        className="inputTables"
      ></input>
    </div>
  );
};

export default InputsWaiter;
