import '../index.css'
import React, { useState } from "react";
import WaiterNav from "../components/WaiterNav";
import TabMenu from '../components/tabMenu';
import MenuListSummary from '../components/SummaryMenu'
import InputsWaiter from '../components/InputsWaiter';



const Waiter = () => {
  const [itemMenu, setItemMenu] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [inputUserName, setInputUserName] = useState('');
  const [inputTableNum, setInputTableNum] = useState('');
  const [orderTable, setOrderTable] = useState([]);

  return (
    <>
      <WaiterNav />
      <InputsWaiter
        inputUserName={inputUserName}
        setInputUserName={setInputUserName}
        inputTableNum={inputTableNum}
        setInputTableNum={setInputTableNum}
      />
      <section className='menuSection'>
        <MenuListSummary
          itemMenu={itemMenu}
          setItemMenu={setItemMenu}
          orderPrice={orderPrice}
          setOrderPrice={setOrderPrice}
          inputUserName={inputUserName}
          setInputUserName={setInputUserName}
          setInputTableNum={setInputTableNum}
          inputTableNum={inputTableNum}
          orderTable={orderTable}
          setOrderTable={setOrderTable}
        />
      </section>
      <TabMenu 
      itemMenu={itemMenu} 
      setItemMenu={setItemMenu} 
      orderPrice={orderPrice} 
      setOrderPrice={setOrderPrice} 
      />

    </>
  );
};

export default Waiter;
