import React from "react";
import Item from "./Item";
import hocSeachBar from "../HOCS/hocSeachBar";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

// export default ItemList;

const ItemListConHoc = hocSeachBar(ItemList);

export default ItemListConHoc;
