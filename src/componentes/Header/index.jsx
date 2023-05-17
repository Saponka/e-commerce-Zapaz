import React from "react";
import Nike from "../../assets/images/Nike.jpg";

const Header = () => {

    

  return (
    <header>
      <a href="/">
        <div className="logo">
          <img src={Nike} alt="logo" width="150" />
        </div>
      </a>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total"> 0</span>
      </div>
    </header>
  );
};

export default Header;
