import React, { useEffect, useState } from "react";
//import IMG from "../../assets/images/img01.jpg";
//import Data from "../../Data";
import { useDispatch, useSelector } from "react-redux";
import { getProductos } from "../../redux/actions";
import { Link } from "react-router-dom";


const ProductosLista = () => {
       


     const dispatch = useDispatch();
     
     const productos = useSelector((state) => state.allProductos)

     const [producto, setProducto] = useState();

     useEffect(()=>{
       setProducto([...productos])
      },[productos]);

     useEffect(()=>{
          dispatch(getProductos())
      }, [dispatch]);

  return (
    <>
    <h1 className="title">Productos</h1>
    <div className="productos">
    { productos.map((zapa,id)=>{
      return (
        
        <div className="producto" key={zapa.id}>
          <a href="#">
            <div className="producto_img">
              <img src={zapa.image} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>{zapa.title}</h1>
            <p>{zapa.category}</p>
            <p className="price">${zapa.price}</p>
          </div>
          <div className="button">
            <button className="btn">Añadir</button>
            <button className="btn2"><Link to={`detalle/${zapa.id}`}>Vista</Link></button>
            
            {/* <a href={`detalle/${id+1}`} className="btn2"><button className="btn2">Vista</button></a> */}
          </div>
        </div>
        
      )
    })  }
    </div>

{/* ---------------------------------------------------------------- */}

      {/* <h1 className="title">Productos</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="button">
            <button className="btn">Añadir</button>
            <a href="/detalle" className="btn2"><button className="btn2">Vista</button></a>
          </div>
        </div>
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src="../../src/assets/images/img04.jpg" alt="" />
            </div>
          </a>
          <div className="producto_footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <p className="price">$320</p>
          </div>
          <div className="button">
            <button className="btn">Añadir</button>
            <a href="/detalle" className="btn2"><button className="btn2">Vista</button></a>
          </div>
        </div>
      </div> */}

{/* --------------------------------------- */}
    </>
  );
};

export default ProductosLista;
