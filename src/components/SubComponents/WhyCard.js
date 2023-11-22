import React from "react";

const WhyCard = ({ img, title, text }) => {
  const circle = {
    color: "#002340",
    position: "absolute",
    background:
      "radial-gradient(50% 50.00% at 50% 50.00%, rgba(237, 27, 52, 0.53) 0%, rgba(237, 27, 52, 0.00) 100%)",
    width: "16rem",
    height: "16rem",
    top: "-10.5rem",
    right: "-4rem",
  };

  const card = {
    background: "#031C3B",
    width: "18rem",
    height: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    marginBottom: "0.8rem",
  };

  const titleStyle = {
    color: "#fff",
    fontWeight: 500,
    fontSize: "1.2rem",
  };

  const textStyle = {
    color: "#fff",
    fontWeight: 400,
    fontSize: "0.9rem",
    lineHeight: "1.6rem",
  };

  const underline = {
    background: "#ED1B34",
    width: "3.5rem",
    height: "3px",
    marginBottom: "0.8rem",
    marginTop: "0.2rem",
  };

  return (
    <div>
      <div style={card}>
        <div style={circle}></div>
        <img src={img} alt={`${title}`} />
      </div>
      <div>
        <h3 style={titleStyle}>{title}</h3>
        <div style={underline}></div>
      </div>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default WhyCard;
