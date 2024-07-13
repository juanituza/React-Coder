import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);
  
  
  // useEffect( () => {
  // }, [] )
  
  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const descontarContador = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };
  
  
  
  const handleAdd = () => {
    if (contador >= 0 ) {
      onAdd(contador);
    }
  };

  return (
    <div className="row mt-5 body">
        <div className="d-flex align-items-center">
        <button className="btn btn-outline-dark" onClick={descontarContador}>
          -
        </button>
        <span className="input-group-text number">{contador}</span>
        <button className="btn btn-outline-dark" onClick={aumentarContador}>
          +
        </button>
      </div>

      <button
        className="btn btn-outline-warning mt-2 boton"
        onClick={handleAdd}
        // disabled={contador === 0 || contador > stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
