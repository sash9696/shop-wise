import React, { useEffect, useState } from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue()
    const [itemsArray, setItemsArray] = useState([])

    useEffect(() => {
      localStorage.setItem('cartData', JSON.stringify(basket));
      console.log("setItem", localStorage.getItem('cartData'))
    }, [])

    useEffect(() => {
      console.log("getItem", localStorage.getItem('cartData'))
      setItemsArray(JSON.parse(localStorage.getItem('cartData')));
      
    }, [])
   
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let storedValue = localStorage.key(i);
  //     console.log(`Item at ${i}: ${storedValue}`);
  // }

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://media.istockphoto.com/photos/shopping-background-cartons-in-shopping-cart-with-ad-order-shopping-picture-id849234730"
          alt="Ad"
        />
        {itemsArray?.length == 0 ? (<div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
          ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* List of all the products */}

            {itemsArray?.map(({id,title, image, price, rating}) => (
                <CheckoutProduct 
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
            />
            ))}
          </div>
          )}
      </div>
      {basket?.length > 0 && (
                <div className="checkout_right">
                    <Subtotal/>
                </div>
            )}
    </div>
    );
}

export default Checkout;
