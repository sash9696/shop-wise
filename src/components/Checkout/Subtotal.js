import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import db from "../../firebase";
import {loadStripe} from '@stripe/stripe-js';

function Subtotal() {
  const [{ basket, user }] = useStateValue();
  const value = getBasketTotal(basket)
  
    

  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={value}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button >Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
