import React from 'react'
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import { ShoppingBasket } from '@material-ui/icons'

function Header() {
    return (
        <div className="header">
            <img src="amazon_log_white.png" className="header__logo"></img>
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="find your item"/>
                <SearchIcon className = "header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                <div className="header__option">                    
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">                        
                    <span className="header__optionLineOne">Yours</span>
                    <span className="header__optionLineTwo">Prime</span>                    
                </div>
                <div className="header__optionsBasket">
                    <ShoppingBasket/>
                   <span className="header__optionLineTwo header__basketCount">0</span>
                </div>                
            </div>
        </div>
    )
}

export default Header
