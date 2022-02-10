import React from 'react';
import db from './firebase';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
        //Add item to the basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })
        
    }    

  return (
    <div className='product'>
        <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <strong>₹</strong>
                <span>{price}</span>
            </p>
            <div className="product_rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐ </p>
                    ))
                }
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket} >Add To Basket</button>

    </div>
    );
}

export default Product;
