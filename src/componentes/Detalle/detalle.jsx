import React from 'react'
import "./detalle.css"
const Detalle = () => {

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Detalle</h1>
      <div className="contenedor" >
          
            <div className="imgDetalleContainer" >
              <img id='detalleImg' src="../src/assets/images/Nike.jpg"alt="" />
            </div>
          
        </div>
          <div className="caracteristicas">
            <h1>Nombre Zapatilla</h1>
            <p>categoria</p>
            <p className="price">$879</p>
            <p className="cantidad">cantidad</p>
          <div className="botones">
            <button className="btn">Añadir</button>
            <button className="btn">Vista</button>
          </div>
          </div>
          <a style={{textDecoration:"none",color:"Lime",fontSize:"25px"}} href="/productos"> Volver</a>
    </div>
  )
}

export default Detalle;
