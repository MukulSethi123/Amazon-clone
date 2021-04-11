import React from 'react'
import './product.css'
import StarIcon from '@material-ui/icons/Star';
import { FormatLineSpacingSharp, Star } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';
  

function Product({id,title,price,rating,image}) {

  const [state, dispatch] = useStateValue();

  

  const addToBasket = () =>{
    // dispatch the item into the datalayer 
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }
    return (
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating).fill().map((_,i)=>(<StarIcon/>))}
            </div>
          </div>
          <img src={image}></img>

          <button onClick="ADD_TO_BASKET">Add to Basket</button>
        </div>
    )
}

export default Product;
