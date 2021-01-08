import React, { useEffect, useState } from "react";
import "./style/SingleProduct.scss";

function SingleProduct({sku}){

    var [product, setProduct] = useState({});

    useEffect(function(){
        fetch("https://hifi-corner.herokuapp.com/api/v1/products/" + sku)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setProduct(data);
            });
    }, []);

    return <h1 className="singleProduct">{sku}</h1>
};

export default SingleProduct;