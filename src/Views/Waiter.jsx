import '../index.css'
import React, { useState } from "react";
import WaiterNav from "../components/Waiter/WaiterNav";
import TabMenu from '../components/Waiter/tabMenu';
import MenuListSummary from '../components/Waiter/SummaryMenu'
import InputsWaiter from '../components/Waiter/InputsWaiter';



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
