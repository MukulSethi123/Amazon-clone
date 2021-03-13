import React from 'react'
import './home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="amazon_banner_1.jpg"/>
                <div className="home__row">                    
                    <Product title="iPhone 12" price="900" image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021658000" rating={5}/>
                    <Product title="onePluse 9 Pro" price="700" image="https://static.toiimg.com/thumb/msid-78807861,width-240,resizemode-4/OnePlus-9-Pro.jpg" rating={5}/>
                    
                </div>
                <div className="home__row">
                    <Product title="onePluse 9 Pro" price="700" image="https://static.toiimg.com/thumb/msid-78807861,width-240,resizemode-4/OnePlus-9-Pro.jpg" rating={5}/>
                    <Product title="onePluse 9 Pro" price="700" image="https://static.toiimg.com/thumb/msid-78807861,width-240,resizemode-4/OnePlus-9-Pro.jpg" rating={5}/>
                    <Product title="onePluse 9 Pro" price="700" image="https://static.toiimg.com/thumb/msid-78807861,width-240,resizemode-4/OnePlus-9-Pro.jpg" rating={5}/>
                </div>
                <div className="home__row">
                    <Product title="onePluse 9 Pro" price="700" image="https://static.toiimg.com/thumb/msid-78807861,width-240,resizemode-4/OnePlus-9-Pro.jpg" rating={5}/>
                    
                </div>
            </div>
            
        </div> 
    )
}

export default Home
