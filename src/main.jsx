import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Institucion from './Institución.jsx';
import Tecnicaturas from './Técnicaturas.jsx';
import Proyectos from './Proyectos.jsx';
import Electronica from './Electro.jsx';
import Electromecanica from './Electrome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Institución",
    element: <Institucion/>,
  },
  {
    path: "Técnicaturas",
    element: <Tecnicaturas/>,
  },
  {
    path: "Proyectos",
    element: <Proyectos/>,
  },
  {
    path: "Electromecánica",
    element: <Electromecanica/>,
  },
  {
    path: "Electrónica",
    element: <Electronica/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
