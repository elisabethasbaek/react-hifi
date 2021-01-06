import React from "react";
import PrimaryNavigation from "./PrimaryNavigation";
import Styles from "./style/SiteHeader.scss";


function SiteHeader(){
    return(
        <header className="header">
            <div className="headerIcons">
                <img src="https://via.placeholder.com/20x20" />
                <img src="https://via.placeholder.com/20x20" />
                <img src="https://via.placeholder.com/20x20" />
                <img src="https://via.placeholder.com/100x20" />
            </div>

            <PrimaryNavigation/>
        </header>
    )
}

export default SiteHeader;