import React from 'react';
import cl from './button.module.css'

const Button = (props) => {
  return (
      <button {...props} className={cl.button + ' ' + props.className}/>
  );
};

export default Button;