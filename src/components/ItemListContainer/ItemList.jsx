import React from 'react'

import Item from './Item';
import hocSeachBar from '../HOCS/hocSeachBar';
import useFetch from '../../hooks/useFetch';

const ItemList = ({ productos, setCarrito, addToCart, onItemClicked }) => {
  // const {productos} = useFetch() ;
  // console.log(productos);
  return (
    <div className="row">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
          addToCart={addToCart}
          onItemClicked={onItemClicked}
        />
        // <div key={producto.id}>{producto.name}</div>
      ))}
    </div>
  );
};

// export default ItemList;

const ItemListConHoc = hocSeachBar(ItemList);

export default ItemListConHoc;
