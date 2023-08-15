import React from "react";
import "../../globalClasses.scss";

const Title = ({ children, padding }) => {
  const style = {
    color: "#E4F4FF",
    fontSize: "2rem",
    fontWeight: "600",
  };

  return (
    <h2 style={style} className={padding && "padding-global"}>
      {children}
    </h2>
  );
};

export default Title;
