import React, {useState, useEffect} from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import getItemsFromAPI, {getItemsFromAPIByCategory} from '../../mockService/mockService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  
  const [productsList, setProductsList] = useState([]);
  const {categoryid} = useParams();
  
  useEffect(()=>{
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then( (myArray)=>{
        console.log(myArray);
        setProductsList (myArray);
    });
    } 
    else {
      getItemsFromAPI().then( (myArray)=>{
        console.log(myArray);
        setProductsList (myArray);
    });
  }
  }, [categoryid]);

  return (
    <>
    <h1 className='text-dark'>{props.greeting}</h1>
    <FlexWrapper>
      <ItemList productsList = {productsList}/>
    </FlexWrapper>
    </>
  );
}

export default ItemListContainer;