import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  
  return (
    <div className="App">
      <header className='bg-dark'>
       {/*  <img src={logo} className="App-logo" alt="logo" /> */}
       <NavBar/>
      </header>
      <ItemListContainer greeting="Bienvenidos a la Mejor Tienda Digital de Deco"/>
    </div>
  );
}

export default App;
