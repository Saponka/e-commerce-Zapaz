import React,{useEffect, useState} from 'react';
import "./detalle.css";
//import { useDispatch, useSelector } from 'react-redux';
//import { getProductoId } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import Data from "../../Data";

const Detalle = () => {

  //let {id} = useParams();
  
  const [productos, setProducto] = useState([]);
   
  //let producto = Data.items;

   useEffect(()=>{
    let productos = Data.items
    setProducto(...productos)
  },[]);  
  
  //const dispatch = useDispatch()
  //const producto = useSelector((state) => state.producto)
   /*  useEffect(()=>{
         dispatch(getProductoId())
     }, [dispatch]);
 */
  return (

    <>
     
      <div className="contenedor" >
          
            <div className="imgDetalleContainer" >
              <img id='detalleImg' src={productos.image}alt="" />
            </div>
          
          <div className="caracteristicas">
            <h1 style={{textAlign:"center"}}>name:{productos.title}</h1>
            <p>Categoria:{productos.category}</p>
            <p className="price"> Precio:${productos.price}</p>
            <p className="cantidad">Cantidad:{productos.cantidad}</p>
          <div className="botones">
            <button className="btnCarac">Añadir</button>
            <button className="btnCarac">Comprar</button>
          </div>
          </div>
          <a style={{textDecoration:"none",color:"Lime",fontSize:"25px"}} href="/productos"><box-icon  name='chevrons-left' type='solid' animation='fade-right' color='#1be420' ></box-icon>Volver</a>
        </div>
    </>
  )
}

export default Detalle;
