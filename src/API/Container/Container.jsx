import React from "react";
import cs from "./Container.module.css";
const Container = ({ children, className = "" }) => {
  return <div className={`${cs.container} ${cs[className]}`}>{children}</div>;
};

export default Container;
