import React, {useState} from 'react';
import Button from '../Button/Button';
import "./itemcount.css"

function ItemCount({stock, onAddToCart}) {
    
    const [ cantidad, setCantidad ] = useState(1);
    
    function handleAdd(evt){if(cantidad < stock){setCantidad(cantidad + 1);}}
    
    function handleSubstract(evt)
    {if(cantidad > 1){setCantidad(cantidad - 1);}}
    
    
    return (
    <div className='itemcount_container'>
        <div className='itemcount_control'>
            <Button className='bg-danger' onClick={handleSubstract}>-</Button>
            <p className='m-2 fs-bold'>{cantidad}</p>
            <Button className='bg-info' onClick={handleAdd}>+</Button>
            <br/>
            <Button className='bg-warning fs-bold' onClick={()=> onAddToCart (cantidad)}>Agregar al carrito</Button>
        </div>
    </div>)}
    
    export default ItemCount;