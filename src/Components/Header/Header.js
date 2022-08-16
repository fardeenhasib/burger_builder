import React from "react";
import { NavLink } from "react-router-dom";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
} from 'reactstrap';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor : "#D70F64",
                height : "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand"> 
                    <img src={Logo} alt="Logo" width="80px"/>
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem> 
                        <NavLink exact to="/" className="NavLink">BurgerBuilder</NavLink>
                    </NavItem>
                    <NavItem> 
                        <NavLink exact to="/order" className="NavLink">Order</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;
