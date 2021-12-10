import '../../CSS/Modal.css'
import React from 'react';




const Modal = ({children, isOpen, closeModal, tittle}) => {
  return (
    <section className={`modal ${isOpen && "open"}`}>
      <section className="modal-container">
        <section>
          <p className="add">{tittle}</p>
        </section>
        <section> 
        <button className="modal-close" onClick={closeModal}><img src="icons/close.png" alt="close"/></button>
        </section>
        {children}
        
       
      </section>
   
    </section>
  )
}

export default Modal
