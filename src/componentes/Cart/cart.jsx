import React from "react";
import image from "../../assets/images/Nike.jpg";
import "./cart.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartDown, cartRemove, cartUp } from "../../redux/actions";

const Cart = () => {

  const dispatch = useDispatch();
  const carro = useSelector((state)=> state.cart);
  //const cart = localStorage.getItem('cart');
const quantity = useSelector((state)=>state.numberCart)

console.log(carro);
//let price = carro.cart.map(e=>e.price*e.quantity).reduce((a,current)=>a+current,0)

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

              {carro.map((el,id)=>{
                return(
                  <div className="carrito__item" key={id}>
                  <img className="imgCart" src={el.image} alt="" />
                  <div>
                     <h3 className="titleProduct">{el.title}</h3>
                     <p className="price">${el.price}</p>
                  </div>
              <div className="quantityContainer">
                 <box-icon name="up-arrow" onClick={()=>dispatch(cartUp(id))} type="solid"></box-icon>
                 <p className="cantidad"> {el.cantidad}</p>
                 <box-icon name="down-arrow" onClick={()=>dispatch(cartDown(id))} type="solid"></box-icon>
              </div>
              <div className="remove__item">
                 <box-icon name="trash" onClick={()=>dispatch(cartRemove(el.id))}></box-icon>
              </div>
              </div>
                )
              })}
              {/* <div className="carrito__item">
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
              </div> */}
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
