import React from "react"
import "./Product.css"



export const Product = ({product, type, location}) => {
    // if (product.accessible === true){const access = "Handicap Accessible"}
    // else {const access = "Not Handicap Accessible"}
    return (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Product Type: {type.name}</div>
        <div className="product__location">Available location: {location.name}, {location.address}</div>
    </section>)
}