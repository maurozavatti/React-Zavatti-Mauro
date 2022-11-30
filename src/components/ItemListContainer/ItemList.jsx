import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

function ItemList(props) {
  let emptyArray = props.productsList.length === 0;

  return (
    <FlexWrapper>
      {emptyArray ? 
        props.feedbackMsg ?
        <h3 style={{backgroundColor:"orange"}}>{props.feedbackMsg}</h3>
      :
      <Loader size={100}/>
      :
      props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;