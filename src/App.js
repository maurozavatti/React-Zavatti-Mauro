import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './storage/CartContext';
import CartView from './components/CartView/CartView';
import MsjSaludo from './components/MsjSaludo/MsjSaludo';
/* 
import { exportItemsToFirestore, getSingleItemFromAPI } from './services/firebase'; */

function App() {
  /* getSingleItemFromAPI("Cs2akgbqWGWNgrxy1LFK"); */
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element= {<ItemListContainer greeting="Bienvenidos a la Mejor Tienda Digital de Deco"/>}/>
            <Route path="/category/:categoryid" element= {<ItemListContainer />}/>  
            <Route path="/detalle/:id" element= { <ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartView/>}/> 
            <Route path="/checkout/:orderid" element={<MsjSaludo/>}/>
            <Route path="*" element ={<h1>404: Ruta no encontrada</h1>}/> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      {/* <button onClick={exportItemsToFirestore}>Exportar Productos</button> */}
    </div>
  );
}

export default App;
