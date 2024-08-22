import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../firebase/firebaseConfig";

function Header() {
  const [{ cart, user, profile }] = useStateValue();
  const [address, setAddress] = useState('')

  const login = () => {
    if (user)
      auth.signOut();
  };

  useEffect(() => {
    const URL = 'https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91';
    fetch(URL)
      .then(res => res.json())
      .then(data => setAddress(data));

  }, [])

  return (
    <nav className="header">
      <div className="header__top">
        <div className="header__left-nav">
          <MenuIcon />
        </div>
        {/* Logo on left */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
{/* Address */}
<div className="header__address">
          <div className="header__address-icon">
            <RoomOutlinedIcon />
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">{address?.city}({address?.country_code})</span>
          </div>
        </div>
        {/* Search box */}
        <div className="header__search">
          <input type="search" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__flag"></div>
        <img src="" />

        

        {/* 3 Links */}
        <div className="header__nav">
          {/* Link 1 - SignIn/SignOut */}
          {user ? (
            <Link to="/" className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne">
                  Hello, {user ? profile?.userName : "Guest"}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          ) : (
              <Link to="/login" className="header__link">
                <div onClick={login} className="header__option">
                  <span className="header__optionLineOne">
                    Hello, {user ? profile?.userName : "User"}
                  </span>
                  <span className="header__optionLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>
            )}
          {/* Link 2 - Return Order */}
          <Link to="/orders" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          
          {/* Basket*/}
          <Link to="/cart" className="header__link">
            <div className="header__optionBasket">
              {/* Shopping Basket Icon*/}
              <ShoppingCartIcon />
              {/* Number of items in basket */}
              <span className="header__optionLineTwo basket__count">
                {cart?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        
        {/* Nav */}
        <div className="header__bottom-nav">
          <span>
            <Link to="/products" className="header__link">
              All
            </Link>
          </span>
          <span>Customer Service</span>
          <span>Gift Cards</span>
          <span>Buy Again</span>
          <span>Browsing History</span>
          <span>Coupons</span>
          <span>Subscribe & Save</span>
          <span>Find a Gift</span>
          {/*

          <span>Books</span>
          <span>New Release</span>
          <span>Gift Ideas</span>
          <span>Customer Service</span>
          <span>Fashion</span>
          <span>Amazon Pay</span>
          */}
        </div>
        {/* Advt */}
        <div className="header__bottom-app">
          <img
            className="header__bottom-image"
            alt="Amazon Home"
            src=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
