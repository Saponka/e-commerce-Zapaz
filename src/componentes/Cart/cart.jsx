import React from "react";
import image from "../../assets/images/Nike.jpg";
const Cart = () => {
  return (
  <div className="carritos">
      <div className="carrito">
          <div className="carrito__close">
              <box-icon name="x"></box-icon>
          </div>
          <h1>Carrito</h1>
          <div className="carrito__center">
              <div className="carrito__item">
                  <img src={image} alt="" />
                  <h3>title</h3>
                  <p className="price">$1000</p>
              </div>
              <div>
                 <box-icon name="up-arrow" type="solid"></box-icon>
                 <p className="cantidad">5</p>
                 <box-icon name="down-arrow" type="solid"></box-icon>
              </div>
              <div className="remove__item">
                 <box-icon name="trash"></box-icon>
              </div>
         </div>
    </div>
  </div>
  );
};

export default Cart;
