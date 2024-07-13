// ItemListContainer.jsx
import React from 'react';
import { useState, useEffect } from "react";
import obtenerProductos from '../../data/db.js'
import ItemList  from './ItemList';
import './itemListContainer.css';

function ItemListContainer({ saludo }) {
  const [productos, setProductos] = useState ([]);

useEffect(() => {
  obtenerProductos()
    .then((respuesta) => {
      setProductos(respuesta);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("finalizo la promesa");
    });
}, [])




  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="card text-bg-warning mb-3 card-custom">
            <h1 className="m-3 text-center card-title text-bg-warning">
              {saludo}
            </h1>
          </div>
          <div>
            <ItemList productos={productos}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
