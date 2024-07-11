import './App.css'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades`);
    // Aquí puedes agregar lógica adicional para manejar el agregado al carrito
  };
  

  return (
    <div className="body">
      <NavBar />
      <ItemListContainer saludo="Bienvenido a la tienda MK ROCK" />
      <ItemCount stock="5" initial="1" onAdd={handleAddToCart} />
    </div>
  );
}





export default App
