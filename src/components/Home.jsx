import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home__container">                
                <img className="home__image" src="amazon_banner_1.jpg"/>                
                <div className="home__row">                    
                    <Product id="1" title="iPhone 12" price={200} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021658000" rating={5}/>                                        
                </div>
                <div className="home__row">
                    
                </div>
                <div className="home__row">
                    
                    
                </div>
            </div>
            
        </div> 
    )
}

export default Home
