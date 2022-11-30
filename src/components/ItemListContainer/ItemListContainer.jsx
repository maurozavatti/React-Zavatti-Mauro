import React, {useState, useEffect} from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import { getItemsFromAPI, getItemsFromAPIByCategory } from '../../services/firebase';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  
  const [productsList, setProductsList] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const {categoryid} = useParams();
  
  useEffect(()=>{
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then( (myArray)=>{
        console.log(myArray);
        setProductsList (myArray);
    })
    .catch (error=>{setFeedbackMsg(error.message)})
    .finally (()=> setIsLoading(false))
    } 
    else {
      getItemsFromAPI().then( (myArray)=>{
        console.log(myArray);
        setProductsList (myArray);
    })
    .finally (()=> setIsLoading(false))
  }
  }, [categoryid]);

  return (
    <>
    <h1 className='text-dark'>{props.greeting}</h1>
    <FlexWrapper>
      <ItemList feedbackMsg={feedbackMsg} productsList = {productsList}/>
    </FlexWrapper>
    </>
  );
}

export default ItemListContainer;