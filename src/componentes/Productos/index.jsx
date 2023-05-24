import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd, getProductos } from "../../redux/actions";
import { Link } from "react-router-dom";

const ProductosLista = () => {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.allProductos);

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    setProducto([...productos]);
  }, [productos]);

  useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);

  console.log(productos);
  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="productos">
        {productos.map((zapa) => {
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
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(cartAdd(zapa));
                  }}
                >
                  Añadir
                </button>
                <Link to={`detalle/${zapa.id}`}>
                  <button className="btn2">Vista</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductosLista;
