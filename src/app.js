import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import SiteHeader from "./components/SiteHeader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Brands from "./pages/Brands";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import SingleProduct from "./components/SingleProduct";

function App(){
    return (
        <>
            <SiteHeader />

            <Router>
                <Home path="/" />
                <AboutUs path="/aboutus" />
                <Brands path="/brands" />
                <Blog path="/blog" />
                <Events path="/events" />
                <Shop path="/shop" />
                <ContactUs path="/contactus" />
                <SingleProduct path="/product/:sku" />
            </Router>
        </>
    );
};

render(<App/>, document.getElementById("root"));