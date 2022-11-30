import React, {useState, useEffect } from 'react'
import {getSingleItemFromAPI}  from '../../services/firebase';
import { useParams } from 'react-router-dom';
import "./itemdetail.css";
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';
import FlexWrapper from '../FlexWrapper/FlexWrapper';


function ItemDetailContainer() {
    const [product, setProduct] = useState (null);
    const [isLoading, setIsLoading] = useState(true);
    const [feedbackMsg, setFeedbackMsg] = useState(null);
    
    
    let id = useParams().id;

    useEffect (()=> {
        getSingleItemFromAPI(id).then ((myArray) => {
            setProduct (myArray);
        })
        .catch ((error) => {
            setFeedbackMsg(error.message);
        })
        .finally (()=> setIsLoading(false));
    }, [id]);
    
    if (isLoading)
    return (
        <FlexWrapper>
            <Loader color="black" size={128}></Loader>
        </FlexWrapper>
    );

    return (
        <div>
            {feedbackMsg ? 
                <h3 style={{backgroundColor:"orange"}}>{feedbackMsg}</h3>
                :
            <ItemDetail product={product}/>}
        </div>
    )
    }

    export default ItemDetailContainer;