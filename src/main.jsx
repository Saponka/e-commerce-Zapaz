import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* redux */
import { Provider } from 'react-redux';
import { store } from './redux/store';

//import componentes
import ErrorPage from "./componentes/Error-Page/error-page.jsx";
import Inicio from './componentes/Inicio/inicio.jsx';
import Detalle from './componentes/Detalle/detalle.jsx';
//react router dom nuevo con vite-react
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/productos",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "productos/detalle/:id",
    element: <Detalle />,
    errorElement: <ErrorPage />,
   
  },
]);

/* ------------------------------------------ */
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <React.StrictMode>
     <RouterProvider router={router} />
   {/*  <App /> */}
  </React.StrictMode>
  </Provider>,
)
