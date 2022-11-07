import React, {useState, useEffect } from 'react'
import {getSingleItemFromAPI}  from '../../mockService/mockService';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';
import "./itemdetail.css";

function ItemDetailContainer() {
 const [product, setProduct] = useState ([]);
 
let params = useParams();
let id = params.id;

 useEffect (()=> {
    getSingleItemFromAPI(id).then ((myArray) => {
        setProduct (myArray);
    }).catch (error => alert (error));
 }, []);
 
 return ( <>
    <div className='detail_container'>
        <div className='card_detail'>
            <h5 className="card-title">{product.title}</h5>
            <img src={product.imgurl} className="card-img-top" alt={product.title}/>
            <div className="card-body">
            <p className="card-text">$ {product.price}</p>
            <p className="card-text">{product.detail}</p>
            <ItemCount stock ={product.stock}></ItemCount>
            </div>
        </div>
    </div>
    
      
 </>);

}

export default ItemDetailContainer;