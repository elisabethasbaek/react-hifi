import React, {useState, useEffect} from "react";
import Card from "./Card";
import "./style/ShopDiv.scss";

function ShopDiv(){
    var [products, setProducts] = useState([])

    useEffect(function(){
        fetch("https://hifi-corner.herokuapp.com/api/v1/products")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                setProducts(data);
            });
    }, []);

    return(
        <>
            {products.map(function(product){
                return (
                    <Card key={product.sku} product={product} />
                )
            })};
        </>
        
    )
}

export default ShopDiv;