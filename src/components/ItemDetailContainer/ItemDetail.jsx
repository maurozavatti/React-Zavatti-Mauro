import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
/* import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"; */

function ItemDetail({ product }) {
  const [isInCart,setIsInCart] = useState (false);
  const {cart, addToCart} = useContext(cartContext);

  let itemInCart = cart.find(item=> product.id === item.id)
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.quantity;
 
  /*  const navigate= useNavigate(); */

    function onAddToCart(cantidad){
/*       Swal.fire({
        title: `Se agregaron ${cantidad} ${product.title} al Carrito`,
        text: 'Deseas ir al carrito?',
        icon: 'info',
        confirmButtonText: 'Ir al Carrito'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        } 
      }) */
        const itemForCart = {
          ...product,
          quantity: cantidad
        }
        addToCart(itemForCart);
        setIsInCart(true);
    }


  return (
    <div className='detail_container'>
    <div className='card_detail'>
        <h5 className="card-title">{product.title}</h5>
        <img src={product.imgurl} className="card-img-top" alt={product.title}/>
        <div className="card-body">
        <p className="card-text">$ {product.price}</p>
        <p className="card-text">{product.detail}</p>
        </div>

  { isInCart ? (
      <div className='d-flex justify-content-between m-2'>
        <Link to="/cart">
          <Button className="bg-warning">Ir al Carrito</Button>
        </Link>
        <Link to="/">
          <Button className="bg-warning">Volver al catalogo</Button>
        </Link>
      </div>
        ) : (
        <ItemCount onAddToCart={onAddToCart} stock ={stock}></ItemCount>
    )}
    </div> 
    </div>
  );
}

export default ItemDetail;