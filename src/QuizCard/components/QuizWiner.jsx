import React from "react";
import cup from "../../assets/coup.png";
import social from "../../assets/social.png";

const QuizWiner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={cup} alt="img" height="300px" />
      <div style={{ width: "50%" }}>
        <p style={{ color: "#FFE063", fontSize: "55px", fontFamily: "bold" }}>
          Felicitari!
        </p>
        <p style={{ color: "#FFf", fontSize: "30px", fontFamily: "bold" }}>
          Acum cunoști mai multe despre corpul tău.
        </p>
        <p style={{ color: "#6FF6D5", fontSize: "23px" }}>
          Această performanță merită împărtășită cu prietenii:
        </p>
        <img src={social} alt="img" />
      </div>
    </div>
  );
};

export default QuizWiner;
