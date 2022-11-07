import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting="Bienvenidos a la Mejor Tienda Digital de Deco"/>}/>
          <Route path="/category/:categoryid" element= {<ItemListContainer />}/>  
          <Route path="/detalle/:id" element= { <ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
