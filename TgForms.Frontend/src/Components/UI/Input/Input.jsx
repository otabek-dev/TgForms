import React from 'react';
import cl from './input.module.css'

const Input = (props) => {
  return (
      <input {...props} className={cl.input + ' ' + props.className} />
  );
};

export default Input;