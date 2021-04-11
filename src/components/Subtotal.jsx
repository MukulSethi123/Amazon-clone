import React from 'react'
import CurrencyFormat from "react-currency-format"
import './subtotal.css'
function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                        <p className="subtotal__title">
                            subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>this contains a gift
                        </small>
                    </>
                )}
            decimalScale = {2}
            value = {0} // HW 
            displayType = {"text"}
            thousandSeprator = {true}
            prefix = {"$"}/>
            <button>Proceed to Checkout</button>            
        </div>
    )
}

export default Subtotal
