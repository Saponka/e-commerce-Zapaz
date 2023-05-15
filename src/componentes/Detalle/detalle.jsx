import React from 'react'
import "./detalle.css"
const Detalle = () => {

  return (
    < >
     
      <div className="contenedor" >
          
            <div className="imgDetalleContainer" >
              <img id='detalleImg' src="../src/assets/images/Nike.jpg"alt="" />
            </div>
          
          <div className="caracteristicas">
            <h1 style={{textAlign:"center"}}>NIKE DUNK LOW SP MAÍZ UNIVERSITARIO BRASIL</h1>
            <p>Categoria:Urban</p>
            <p className="price"> Precio:$879</p>
            <p className="cantidad">Cantidad:5</p>
          <div className="botones">
            <button className="btnCarac">Añadir</button>
            <button className="btnCarac">Vista</button>
          </div>
          </div>
          <a style={{textDecoration:"none",color:"Lime",fontSize:"25px"}} href="/productos"><box-icon  name='chevrons-left' type='solid' animation='fade-right' color='#1be420' ></box-icon>Volver</a>
        </div>
    </>
  )
}

export default Detalle;
