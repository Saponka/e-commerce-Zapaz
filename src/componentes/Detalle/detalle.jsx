import React, { useEffect, useState } from "react";
import "./detalle.css";
//import { useDispatch, useSelector } from 'react-redux';
//import { getProductoId } from '../../redux/actions';
import { useParams } from "react-router-dom";
import Data from "../../Data";

const Detalle = () => {

  const { id } = useParams();
  ///////funciona/asi si, sin use Effect, ni use State;////////
  /* const [producto, setProducto] = useState([]);
  let product = Data.items;
  const zapatilla = product.find((item)=> item.id == id) */

  ////////////////////////////////
  const [producto, setProducto] = useState([]);

    useEffect(() => {
    let product = Data.items;
    setProducto([...product]);
  }, []); 

  const zapatilla = producto.find((item)=> item.id == id)
  console.log(producto);
  console.log(id);
  console.log("zapatilla por find ID:",zapatilla);

  /////////////////////////////////////////

  //const dispatch = useDispatch()
  //const producto = useSelector((state) => state.producto)
  /*  useEffect(()=>{
         dispatch(getProductoId(id))
     }, [dispatch,id]);
 */

  /*   useEffect(() => {
      dispatch(getVideoGamesId(id)).then(() => setCarga(false))
     }, [dispatch, id]); */
  return (
    <>
      <div className="contenedor">
        <div className="imgDetalleContainer">
          <img id="detalleImg" src={producto.image} alt="" />
        </div>
        <div className="caracteristicas">
          <h1 style={{ textAlign: "center" }}>name:{producto.title}</h1>
          <p>Categoria:{producto.category}</p>
          <p className="price"> Precio:${producto.price}</p>
          <p className="cantidad">Cantidad:{producto.cantidad}</p>
          <div className="botones">
            <button className="btnCarac">Añadir</button>
            <button className="btnCarac">Comprar</button>
          </div>
        </div>
        <a
          style={{ textDecoration: "none", color: "Lime", fontSize: "25px" }}
          href="/productos"
        >
          <box-icon
            name="chevrons-left"
            type="solid"
            animation="fade-right"
            color="#1be420"
          ></box-icon>
          Volver
        </a>
      </div>
    </>
  );
};

export default Detalle;
