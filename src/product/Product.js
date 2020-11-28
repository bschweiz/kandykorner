import React from "react"
import "./Product.css"



export const Product = ({product}) => (
    // if (product.accessible === true){const access = "Handicap Accessible"}
    // else {const access = "Not Handicap Accessible"}
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__type">Product Type: {product.productTypeId}</div>
        <div className="product__location">Available location: {product.locationId}</div>
    </section>
)