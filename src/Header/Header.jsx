import React from "react";
import image from "./../assets/header-img.png";
import style from "./Header.module.css";

const Header = () => {
  const { header, wrap, title, secondTitle, text, textWrap } = style;

  return (
    <div className={header} style={{ padding: "0px 145px" }}>
      <div className={wrap}>
        <div className={textWrap}>
          <p className={title} style={{ margin: "-15px" }}>
            Vorbim despre
          </p>
          <p className={title} style={{ margin: "-15px" }}>
            educația sexuală.
          </p>
          <p className={secondTitle} style={{ margin: "0px" }}>
            Altfel.
          </p>
          <p className={text}>
            Gyneco.md este o platformă interactivă care facilitează accesul la
            educație sexuală și reproductivă, promovează cunoașterea propriului
            corp, distruge mituri și contribuie la o generație mai sănătoasă.
          </p>
          <button>Află mai multe</button>
        </div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Header;
