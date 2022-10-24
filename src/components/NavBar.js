import CartWidget from "./CartWidget/CartWidget" 

function NavBar(){
    return(
        <>
        <h1 className="text-light">Amapola Deco</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
        <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                <CartWidget/>
            </div>
        </div>
    </nav>
        </>
    )
}

export default NavBar;