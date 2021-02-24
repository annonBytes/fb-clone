import React from 'react'
import '../components/Header.css'
import logo from '../assets/facebook.svg'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
               <img src={logo} alt=""/>
            </div>


            <div className="header__input">
               <SearchIcon />
               <input type="text"/>
            </div>

            <div className="header__middle">

            </div>

            <div className="header__right">
                
            </div>
        </div>
    )
}

export default Header
