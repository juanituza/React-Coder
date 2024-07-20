import './App.css'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  
  

  return (
    <div className="body">
      <NavBar />
      <ItemListContainer saludo="Bienvenido a la tienda MK BUY" />
      {/* <ItemCount stock={5} initial={1} onAdd={addToCart} /> */}
      {/* <ItemDetailContainer /> */}
    </div>
  );
}





export default App
