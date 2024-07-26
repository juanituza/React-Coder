import { useState, useEffect } from "react";
import obtenerProductos from "../data/db.js";
import useLoading from "./useLoading";
import { useParams } from "react-router-dom";

const useFetch = () => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando } = useLoading();
  const { idCategoria } = useParams();



  useEffect(() => {
    mostrarCargando();
    obtenerProductos()
      .then((respuesta) => {
        if (idCategoria) {
    
          const productosFiltrados = respuesta.filter(
            (producto) => producto.category === idCategoria
          );

          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        ocultarCargando();
      });
  }, [idCategoria]);
  
  return { productos, cargando };
};

export default useFetch;
