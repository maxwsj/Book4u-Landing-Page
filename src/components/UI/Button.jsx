import React from 'react';
import classes from '../UI/Button.module.css';

const Button = () => {
   const buttonAppLink = (e) => {
      e.preventDefault();
      window.open('https://github.com/');
   };
   return (
      <button className={classes.button} onClick={buttonAppLink}>
         Baixe o Aplicativo
      </button>
   );
};

export default Button;
