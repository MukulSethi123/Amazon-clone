import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal.jsx'
function Checkout() {
    const imgAddress = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src={imgAddress} alt="" className="checkout__ad"/>
                <div className="checkout__title">
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {/* basket item */}
                </div>
            </div>
            <div className="checkout__right">
            <Subtotal/>
                          
            </div>
        </div>
    )
}

export default Checkout
