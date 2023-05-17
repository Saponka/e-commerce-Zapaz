import React from 'react';
import Header from "./componentes/Header";
import ProductosLista from './componentes/Productos/index';
import 'boxicons';
import Cart from './componentes/Cart/cart';


function App() {
  
  return (
    
    <div className='App'>
     <Header/>
    {/*  <Cart/> */}
     <ProductosLista/> 
    </div>
    
  )
}

export default App
