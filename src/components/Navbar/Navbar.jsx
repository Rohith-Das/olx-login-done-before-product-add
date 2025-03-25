
import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/img/OLX_green_logo.svg (1).png';
// import { FaSearch, FaHeart } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';
import { useAuth } from "../../context/AuthContext";


const Navbar = ({onLoginClick}) => {
    const navigate = useNavigate();
    const {user,logout}=useAuth();

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <img className="logo" src={Logo} alt="OLX Logo" onClick={()=>navigate('/')} style={{cursor:"pointer"}}/>
                </div>
                
                <div className="location-search">
                    <input type="text" placeholder="India" />
                    {/* <IoIosArrowDown className="dropdown-icon" /> */}
                </div>
                
                <div className="search-bar">
                    <input type="text" placeholder='Search "Cars"' />
                    <button className="search-button">
                        {/* <FaSearch /> */}
                    </button>
                </div>
                
                <div className="navbar-right">
                    <div className="language-dropdown">
                        ENGLISH 
                    </div>
                    <div className="fav-icon">
                        {/* <FaHeart /> */}
                    </div>
                    {user ? (
    <div className="user-info">
        Welcome, {user.displayName ||  user.email.split('@')[0]}  {/* ✅ Show username */}
        <button className="logout-btn" onClick={logout}>Logout</button>
    </div>
) : (
    <div className="login" onClick={onLoginClick}>Login</div>
)}

                   <div className="sellMenu">
                   <button className="sell-btn"  onClick={() => navigate('/create')}>+ <span>SELL</span></button>
                   </div>
                </div>
            </div>
            
            <div className="categories-bar">
                <div className="categories-dropdown">
                    ALL CATEGORIES 
                </div>
                <div className="category-links">
                    <a href="#" className="category-link">Cars</a>
                    <a href="#" className="category-link">Motorcycles</a>
                    <a href="#" className="category-link">Mobile Phones</a>
                    <a href="#" className="category-link">For Sale: Houses & Apartments</a>
                    <a href="#" className="category-link">Scooters</a>
                    <a href="#" className="category-link">Commercial & Other Vehicles</a>
                    <a href="#" className="category-link">For Rent: Houses & Apartments</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;