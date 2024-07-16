import React from 'react'

import Item from './Item';

const ItemList = ({ productos, setCarrito, addToCart }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
          
          addToCart={addToCart}
        />
        // <div key={producto.id}>{producto.name}</div>
      ))}
    </div>
  );
};

export default ItemList
