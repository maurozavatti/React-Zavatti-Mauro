import React, {useContext} from 'react';
import { Link, useActionData, useRouteLoaderData } from 'react-router-dom';
import { createBuyOrderFirestore } from '../../services/firebase';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom";
import BuyForm from './BuyForm';


function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const navigate = useNavigate();
    
    if (cart.length === 0) 
    return ( <div>
            <h3>Tu Carrito de Compras esta Vacio</h3>
            </div>
    )

function createBuyOrder(userData){
    const buyData = {
        buyer: userData,
        items: cart,
        total: totalPriceInCart(),
        date: new Date()
    }
    createBuyOrderFirestore(buyData).then((orderId)=>{
        console.log(orderId);
        clear();
        navigate(`/checkout/${orderId}`);
        Swal.fire({
            title: `Gracias por tu compra`,
            text: `Tu numero de Orden es ${orderId}`,
            icon: 'info',
    });
    });
}

    return (
    <div>
        <h1>Tu Carrito de Compras</h1>
        { cart.map ( (cartItem) => (
                <div key={cartItem.id} className='d-flex justify-content-between m-3'>
                    <img src= {cartItem.imgurl} alt={cartItem.title} width="60"/>
                    <h3> {cartItem.title}</h3>
                    <h4> ${cartItem.price}</h4>
                    <h4>Cantidad {cartItem.quantity} </h4>
                    <h4>Precio a pagar: {cartItem.quantity * cartItem.price}</h4>
                    <Button onClick= {()=> removeItem(cartItem.id)}>Eliminar</Button>
                </div>
            ))}
            <p><Button onClick={clear}>Vaciar Carrito</Button></p>
            <h3>Total a Pagar: ${totalPriceInCart()}</h3>
            <h3>Completa el Formulario para tu Orden de Compra</h3>
            
            <BuyForm onSubmit={createBuyOrder}/>
    </div>
)
}

export default CartView;