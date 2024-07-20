// ItemListContainer.jsx
import React from 'react';
import { useState, useEffect } from "react";
import obtenerProductos from "../../data/MOCK_DATA1.js";
import ItemList  from './ItemList';
import ItemDetailContainer from '../../components/itemDetailContainer/ItemDetailContainer'
import './itemListContainer.css';

function ItemListContainer({ saludo }) {
  const [productos, setProductos] = useState ([]);
  const [carrito, setCarrito] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  function addToCart(item) {
    const itemExist = carrito.findIndex((producto) => producto.id === item.id)
    if(itemExist < 0) {
      setCarrito((prevCart) => [...prevCart, item]);

    }else{
      console.log("elemento existe");
    }
  }

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

const handleItemClick = (id) => {
  setSelectedProductId(id);
};



  return (
    <div className="container">
      {selectedProductId ? (
        <ItemDetailContainer
          productoId={selectedProductId}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
          addToCart={addToCart}
        />
      ) : (
        <div className="row justify-content-center">
          <div className="row card text-bg-primary mb-3 card-custom justify-content-center">
            <h1 className="m-3 text-center card-title text-bg-primary ">
              {saludo}
            </h1>
          </div>
          <div className="row ">
            <ItemList
              productos={productos}
              carrito={carrito}
              setCarrito={setCarrito}
              addToCart={addToCart}
              onItemClicked={handleItemClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
