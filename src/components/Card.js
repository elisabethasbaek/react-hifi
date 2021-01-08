import React from "react";
import {Link} from "@reach/router";

function Card({product}){
    return(
        <div className="shopDiv">
            <div className="shopDiv__imageContainer">
                <img className="shopDiv__imageContainer__image" src={product.images[0]} alt="" />
            </div>
            <p>
                <Link to={"/product/" + product.sku} className="shopDiv__description">
                    {product.make} {product.model}
                </Link>
            </p>
            <p className="shopDiv__price">£{product.price}</p>
            <button className="shopDiv__button">TITS</button>
        </div>
    )
}

export default Card;