import React from 'react';
import cl from './errorModal.module.css'

const ErrorModal = ({ errorMessage, onClose }) => {
  return (
      <div className={cl.modal}>
        <div className={cl.modal_content}>
          <h2>Error</h2>
          <p>{errorMessage}</p>
          <button className={cl.button} onClick={onClose}>Close</button>
        </div>
      </div>
  );
};

export default ErrorModal;