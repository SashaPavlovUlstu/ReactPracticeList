import React from "react";
import sc from "./Input.module.css";
const Input = ({onChange ,value}) => {
  return <input onChange={onChange} className={sc.input} value={value}></input>;
};

export default Input;
