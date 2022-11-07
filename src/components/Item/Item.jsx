import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "./item.css";

function Item( {product}) {
    const [ fav, setFav ] = useState(false);

    function handleFavorite(){
        setFav(!fav);
    }

    let classButtonFavorite = fav === true? "cardFavicon favorite" : "cardFavicon";
    let urlDetail = `/detalle/${product.id}`;
 return (
    <>
   <div className=' card container d-flex justify-content-center'>
   <div className='row align-items-center'>
    <button onClick={handleFavorite} className={classButtonFavorite}>♥</button>
       <div className='col'>
       <img src={product.imgurl} className="card-img-top" alt={product.title}/>
        <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
       {/*  <p className="card-text">$ {product.price}</p>
        <p className="card-text">{product.detail}</p> */}
       <Link to= {urlDetail}>
         <Button>Ver Mas</Button>
      </Link>
        </div>
       </div>
    </div>    
   </div>
    </>
  );

}

export default Item;