import React from "react";
import "./modal.css"

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (


    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>X</button>
        <div className="modal-container">
          {children}
        </div>
      </section>
    </div>
  );
};

export default Modal;
