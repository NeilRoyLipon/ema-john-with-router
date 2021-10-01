import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink exact to="/">Shop</NavLink>
                <NavLink exact to="/review">Order Review</NavLink>
                <NavLink exact to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;