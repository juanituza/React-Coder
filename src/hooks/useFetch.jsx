import { useState, useEffect } from "react";
// import obtenerProductos from "../data/db.js";
import useLoading from "./useLoading";
import { useParams } from "react-router-dom";
import { getDocs , collection, query, where } from "firebase/firestore"
import db from "../db/dataBase.js"

const useFetch = () => {
  const [productos, setProductos] = useState([]);
  const { cargando, mostrarCargando, ocultarCargando } = useLoading();
  const { idCategoria } = useParams();

  const getProducts = async () => {
    try {
      const productosRef = collection(db, "productos");
      const dataDb = await getDocs(productosRef);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      ocultarCargando(); // Ocultar carga una vez que se obtienen los productos
    }
  }

  const getProductsByCategory = async () => {
    try {
      const productosRef = collection(db, "productos");
      const q = query(productosRef, where("category", "==", idCategoria));

      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      ocultarCargando(); // Ocultar carga una vez que se obtienen los productos
    }
  }

  useEffect(() => {
    mostrarCargando();
    if (idCategoria) {
      getProductsByCategory();
    }else{
      getProducts();
    }
  }, [idCategoria]);


  
  // useEffect(() => {
    // mostrarCargando();
    
    // obtenerProductos()
    //   .then((respuesta) => {
    //     if (idCategoria) {
    
    //       const productosFiltrados = respuesta.filter(
    //         (producto) => producto.category === idCategoria
    //       );

    //       setProductos(productosFiltrados);
    //     } else {
    //       setProductos(respuesta);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     ocultarCargando();
    //   });
  // }, [idCategoria]);
  
  return { productos, cargando };
};

export default useFetch;
