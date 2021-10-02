import React from "react";
import style from "./WhyGyneco.module.css";
import featuresList from "../../assets/featuresList.png";

const WhyGyneco = () => {
  const { block, title } = style;
  return (
    <div className={block}>
      <p className={title}>De ce gyneco?</p>
      <img
        src={featuresList}
        alt="img"
        style={{ height: "270px", marginTop: "45px" }}
      />
    </div>
  );
};

export default WhyGyneco;
