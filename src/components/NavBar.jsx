import CartWidget from "./CartWidget/CartWidget"; 
import Button from "./Button/ButtonCarrito";
import ButtonCarrito from "./Button/ButtonCarrito";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <h1 className="text-white bg-dark ">Amapola Deco</h1>
        <nav className="navbar navbar-expand-lg navbar-light m-2">
        <div className="container-fluid ">
            <div className="collapse navbar-collapse justify-content-between m-1" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active fw-bold text-dark" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/category/tela">Tela</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/category/colgantes">Colgantes</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/category/maderas">Maderas</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/category/fruteras">Cocina</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fw-bold text-dark" to="/category/sillones">Living</Link>
                    </li>
                </ul>
                <ButtonCarrito></ButtonCarrito>
            </div>
        </div>
    </nav>
        </>
    )
}

export default NavBar;