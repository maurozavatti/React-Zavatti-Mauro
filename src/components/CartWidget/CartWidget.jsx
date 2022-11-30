import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import cartContext from '../../storage/CartContext';


function CartWidget() {
  const {totalItemsInCart} = useContext(cartContext);
  
  return (
      <div>
      <FontAwesomeIcon icon = {faShoppingCart}/>
      {
      (totalItemsInCart() > 0)?
      <span>{totalItemsInCart()}</span>
      :<></>
      }
    </div>
  );
}

export default CartWidget;