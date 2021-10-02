import React from "react";
import price3 from "../../assets/Price_3.png";
import price2 from "../../assets/Price_2.png";
import price1 from "../../assets/Price_1.png";

const Pricing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 145px",
        margin: "100px 0px",
      }}
    >
      <img src={price1} alt="img" />
      <img src={price2} alt="img" />
      <img src={price3} alt="img" />
    </div>
  );
};

export default Pricing;
