import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Footer">
      <a onClick={handleClick}>
        <div className="Footer__Back-To-Top">
          <ExpandLessIcon className="Footer__Back-To-Top-Text" />
        </div>
      </a>

      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>About Amazon</li>
            <li>Sustainability</li>
            <li>Press Center</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money With Us</div>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell apps on Amazon</li>
            <li>Start a package delivery business</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Amazon Payment Products</div>
          <ul>
          <li>Amazon Rewards Visa Signature Cards</li>
          <li>Amazon.com Store Card</li>
          <li>Amazon Secured Card</li>
          <li>Amazon Business Card</li>
          <li>Amazon Business Line of Credit</li>
          <li>Shop with Points</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Let Us Help You</div>
          <ul>
          <li>Amazon and COVID-19</li>
    <li>Your Account</li>
    <li>Your Orders</li>
    <li>Shipping Rates & Policies</li>
    <li>Amazon Prime</li>
    <li>Returns & Replacements</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="Footer__Line">
        <img
          className="Footer__Line-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <span className="Footer__Line-message">
          <a href="https://portfolio-chrisma.vercel.app" target="_blank" rel="noreferrer">Amazon React Challenge - Coded by Chris Ma</a>
          
          
          {" "}
          
            
        </span>
      </div>
    </div>
  );
}

export default Footer;
