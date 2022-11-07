import React, {useState} from 'react';
import Button from '../Button/Button';
import "./itemcount.css"

function ItemCount({stock}) {
    
    const [ cantidad, setCantidad ] = useState(1);
    
    function handleIncrement(){if(cantidad < stock){setCantidad(cantidad + 1);}}
    function handleDecrement()
    {if(cantidad > 1){setCantidad(cantidad - 1);}}
    function handleAddToCart()
    {console.log("Agregado al cart")}
    
    return (
    <div className='itemcount_container'>
        <div className='itemcount_control'>
            <button className='bg-danger' onClick={handleDecrement}>-</button>
            <p className='m-2 fs-bold'>{cantidad}</p>
            <button className='bg-info' onClick={handleIncrement}>+</button>
            <br/>
            <button className='bg-warning fs-bold' onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    </div>)}
    
    export default ItemCount;