import React from 'react'
import './product.css'
import StarIcon from '@material-ui/icons/Star';
import { FormatLineSpacingSharp, Star } from '@material-ui/icons';
  

function Product({title,price,rating,image}) {
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

          <button>Add to Basket</button>
        </div>
    )
}

export default Product;
