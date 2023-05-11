import React from 'react'
import FotoInicio from "../../assets/images/inicio.jpg"
import Header from '../Header';
const Inicio = () => {
  return (
    <div className='inicio'>
        <img src={FotoInicio} alt="" />
      
      <pre>{`Bienvenidos al e-commerce

           de zapatillas mas grande del mundo
      `}
      </pre>
      <a href="/productos">Home</a>
    </div>
  )
}

export default Inicio;
