import { useState, useEffect } from "react";
import obtenerProductos from "../data/db.js";
import useLoading from "./useLoading";

const useFetch = () => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando } = useLoading();

  useEffect(() => {
    mostrarCargando();
    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        ocultarCargando();
      });
  }, []);

  return { productos, cargando };
};

export default useFetch;
