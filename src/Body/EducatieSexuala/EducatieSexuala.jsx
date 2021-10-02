import React from "react";
import style from "./EducatieSexuala.module.css";
import quizuri from "../../assets/quizuri.png";
import webinare from "../../assets/webinare.png";
import cursuri from "../../assets/cursuri.png";

const EducatieSexuala = () => {
  const { block, title, secondTitle } = style;
  return (
    <div className={block}>
      <p className={title}>Educație sexuală de la A la Z</p>
      <p className={secondTitle}>
        Învață despre propria sexualitate din surse sigure prin metode
        interactive
      </p>
      <img
        src={quizuri}
        alt="img"
        style={{ height: "300px", marginBottom: "30px" }}
      />
      <img
        src={webinare}
        alt="img"
        style={{ height: "300px", marginBottom: "-23px" }}
      />
      <img src={cursuri} alt="img" style={{ height: "300px" }} />
    </div>
  );
};

export default EducatieSexuala;
