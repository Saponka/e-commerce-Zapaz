import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//react router dom nuevo con vite-react
import ErrorPage from "./error-page";
import Inicio from './componentes/Inicio/inicio.jsx';
import Detalle from './routes/detalle.jsx';
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
    path: "/detalle",
    element: <Detalle />,
    errorElement: <ErrorPage />,
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
   {/*  <App /> */}
  </React.StrictMode>,
)
