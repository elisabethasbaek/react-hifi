import React from "react";
import {Link} from "@reach/router";
import Styles from "./style/PrimaryNavigation.scss";

function PrimaryNavigation(){
    return(
        <nav className="primaryNavBar">
            <ul>
                <li><Link to="/" className="navbarLink">Home</Link></li>
                <li><Link to="/aboutus" className="navbarLink">About Us</Link></li>
                <li><Link to="/brands" className="navbarLink">Brands</Link></li>
                <li><Link to="/blog" className="navbarLink">Blog</Link></li>
                <li><Link to="/events" className="navbarLink">Events</Link></li>
                <li><Link to="/shop" className="navbarLink">Shop</Link></li>
                <li><Link to="/contactus" className="navbarLink">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default PrimaryNavigation;