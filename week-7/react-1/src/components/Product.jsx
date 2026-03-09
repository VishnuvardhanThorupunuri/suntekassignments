import React from "react";

function Product(props){
    let {productId,name,price,brand,description,image}=props.product;
    return (
        <div>
        <p>{name}</p>
        <p>{name}</p>
        <p>{name}</p>
        <p>{name}</p>
        <img src={image} alt=""/>

    </div>
    );
}

export default Product;