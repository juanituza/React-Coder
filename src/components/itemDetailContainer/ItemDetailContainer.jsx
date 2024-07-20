import React, { useState, useEffect } from "react";
import obtenerProductos from "../../data/MOCK_DATA1";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetailContainer.css";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({
  productos,
  producto,
  addToCart,
  productoId,
}) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productoEncontrado = productos.find(
      (productoData) => productoData.id === productoId
    );
    setProduct(productoEncontrado);
  }, []);

  return (
    <>
      <ItemDetail product={product} addToCart={addToCart} producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
