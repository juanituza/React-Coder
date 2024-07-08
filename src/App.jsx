import './App.css'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  

  return (
    <div className='body'>
      <NavBar />
      <ItemListContainer 
        saludo = "Bienvenido a la tienda MK ROCK"
      />
      
    </div>
  );
}





export default App
