import React from 'react'
import './Styles/Header.scss'
import Container from '@mui/material/Container';
import Logo from "./Assets/Logo.png";
import Cart from './Assets/Cart.svg'
import Avtar from './Assets/Avtar.svg'
import Search from './Assets/Search.svg'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
function Header() {
    function toggleNavbar(event) {
        let leftnav=document.getElementById('leftNav')
        if (leftnav.style.left==='-250px') {
            leftnav.style.left="0px"
        } else {
            leftnav.style.left="-250px"
        }
    }
    return (
        <>
            <Container className='headerContainer'>
                <header>
                    <div className="logo">
                        <DehazeIcon className='navbarOptionBtn' id="navbarOptionBtn" onClick={toggleNavbar}/>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <nav className='desktopNav'>
                        <a href="#men">Men</a>
                        <a href="#women">Women</a>
                        <a href="#kids">Kids</a>
                    </nav>
                    <div className="navActions">
                        <img src={Search} alt="Search" />
                        <img src={Cart} alt="Cart" />
                        <img src={Avtar} alt="Avtar" />
                    </div>
                    <nav id='leftNav'>
                        <ClearIcon id="hideNavBar" onClick={toggleNavbar}/>
                        <a href="#men">Men</a>
                        <a href="#women">Women</a>
                        <a href="#kids">Kids</a>
                    </nav>
                </header>
            </Container>
        </>
    )
}

export default Header
