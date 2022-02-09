import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://media.istockphoto.com/photos/shopping-background-cartons-in-shopping-cart-with-ad-order-shopping-picture-id849234730"
          alt="Ad"
        />
        {basket?.length == 0 ? (<div>
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

            {basket?.map((item, index) => (
                <CheckoutProduct 
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            
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
