import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(Number(initial));
  
  
  useEffect( () => {
  }, [] )
  
  const aumentarContador = () => {
    if (contador >= initial && contador < stock) {
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
      <CardProduct
        contador={contador}
        aumentarContador={aumentarContador}
        descontarContador={descontarContador}
        onAdd={handleAdd}
        // stock={Number(stock)}
      />
      
    </div>
  );
}

export default ItemCount;
