import React from "react";
import image from "../../assets/images/Nike.jpg";
import "./cart.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {

  const dispatch = useDispatch();
  const carro = useSelector((state)=> state);
  const cart = localStorage.getItem('cart')

  return (
  <div className="carritos show">
      <div className="carrito show">
        <Link to="/productos">
          <div className="carrito__close">
              <box-icon name="x"></box-icon>
          </div>
          </Link>
          <h1 className="tituloCart">Carrito</h1>
          <div className="carrito__center">

              <div className="carrito__item">
                  <img className="imgCart" src={image} alt="" />
                  <div>
                     <h3 className="titleProduct">Title Product</h3>
                     <p className="price">$1000</p>
                  </div>
              <div className="quantityContainer">
                 <box-icon name="up-arrow" type="solid"></box-icon>
                 <p className="cantidad"> 5</p>
                 <box-icon name="down-arrow" type="solid"></box-icon>
              </div>
              <div className="remove__item">
                 <box-icon name="trash"></box-icon>
              </div>
              </div>
              <div className="carrito__item">
                  <img className="imgCart" src={image} alt="" />
                  <div>
                     <h3 className="titleProduct">Title Product</h3>
                     <p className="price">$1000</p>
                  </div>
              <div className="quantityContainer">
                 <box-icon name="up-arrow" type="solid"></box-icon>
                 <p className="cantidad"> 5</p>
                 <box-icon name="down-arrow" type="solid"></box-icon>
              </div>
              <div className="remove__item">
                 <box-icon name="trash"></box-icon>
              </div>
              </div>
              <div className="carrito__item">
                  <img className="imgCart" src={image} alt="" />
                  <div>
                     <h3 className="titleProduct">Title Product</h3>
                     <p className="price">$1000</p>
                  </div>
              <div className="quantityContainer">
                 <box-icon name="up-arrow" type="solid"></box-icon>
                 <p className="cantidad"> 5</p>
                 <box-icon name="down-arrow" type="solid"></box-icon>
              </div>
              <div className="remove__item">
                 <box-icon name="trash"></box-icon>
              </div>
              </div>
         </div>
         <div className="carrito__footer">
             <h3>Total:$5211</h3>
             <button className="btnFooter">Payment</button>
         </div>
    </div>
  </div>
  );
};

export default Cart;
