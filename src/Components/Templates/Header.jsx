import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../Styles/Templates/Header.scss'
import Container from '@mui/material/Container';
import Logo from "../../Assets/Templates/Logo.png";
import Cart from '../../Assets/Templates/Cart.svg'
import Avtar from '../../Assets/Templates/Avtar.svg'
import Search from '../../Assets/Templates/Search.svg'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

function Header() {
    function toggleNavbar(event) {
        let leftnav = document.getElementById('leftNav')
        if (leftnav.style.left === '-250px') {
            leftnav.style.left = "0px"
        } else {
            leftnav.style.left = "-250px"
        }
    }
    function toggleSearchBar(event) {
        let SearchBar = document.getElementById('SearchBar')
        if (SearchBar.style.maxHeight === '0px') {
            SearchBar.style.maxHeight = "80px"
        } else {
            SearchBar.style.maxHeight = "0px"
        }
    }
    return (
        <>
            <Container className='headerContainer'>
                <header>
                    <div className="logo">
                        <DehazeIcon className='navbarOptionBtn' id="navbarOptionBtn" onClick={toggleNavbar} />
                        <NavLink to="/"> <img src={Logo} alt="Logo" /></NavLink>
                    </div>
                    <nav className='desktopNav'>
                        <a href="#men"> <NavLink to="/products"> Men</NavLink></a>
                        <a href="#women">Women</a>
                        <a href="#kids">Kids</a>
                    </nav>
                    <div className="navActions">
                        <img src={Search} alt="Search" onClick={toggleSearchBar} />
                        <NavLink to="/cart">
                            <img src={Cart} alt="Cart" />
                        </NavLink>
                        <NavLink to="/login">
                            <img src={Avtar} alt="Avtar" />
                        </NavLink>
                    </div>
                    <nav id='leftNav'>
                        <ClearIcon id="hideNavBar" onClick={toggleNavbar} />
                        {/* <div > */}

                        <Accordion className="filterItem" style={{margin:"50px 0 0 0"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="productType"
                            >
                                <Typography>Shop By Category</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="LeftNavbarContaint">
                                        <NavLink to="/products"> Men</NavLink>
                                        <NavLink to="/Products">Women</NavLink>
                                        <NavLink to="/Products">Kids</NavLink>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="filterItem" style={{"margin":"0px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="productType"
                            >
                                <Typography>Shop By Collection</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="LeftNavbarContaint">
                                        <NavLink to="/products"> Summer</NavLink>
                                        <NavLink to="/Products">Winter</NavLink>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="filterItem" style={{"margin":"0px"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="productType"
                            >
                                <Typography>Shop By Type</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className="LeftNavbarContaint">
                                        <NavLink to="/products"> T-Shirts</NavLink>
                                        <NavLink to="/Products">Sweatshirt</NavLink>
                                        <NavLink to="/Products">Tank Tops</NavLink>
                                        <NavLink to="/Products">Dress shirts</NavLink>
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {/* </div> */}
                    </nav>
                </header>
                <div id="SearchBar">
                    <div className="search">
                        <input type="search" name="search" id="search" placeholder='Type Here' />
                        <button>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Header
