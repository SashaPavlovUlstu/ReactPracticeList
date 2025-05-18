import React from "react";
import cs from "./Button.module.css";
const Button = ({ children, className = "",onClick }) => {
  return (
    <button onClick={onClick} className={`${cs.button} ${cs[className]}`}>{children}</button>
  );
};

export default Button;
