import React, { useEffect } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";


function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

    
  const removeFromBasket = () => {
      //Add logic to remove item from the basket
      dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id
      })
  }
  return (
    <div className="checkoutProduct">
      {basket.length ?
      <>
      (<img className="checkoutProduct_image" src={image} alt="Product" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          {price}
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} >Remove from basket</button>
      </div>)
      
      </>
      :
      ('')
      }
      
    </div>
  );
}

export default CheckoutProduct;