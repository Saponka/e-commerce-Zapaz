import React from "react";
import Nike from "../../assets/images/Nike.jpg";
import { Link } from "react-router-dom";

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
        <Link to="/carrito">
       <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total"> 0</span>
      </div>
      </Link>
    </header>
  );
};

export default Header;
