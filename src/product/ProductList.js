import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProducts()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the product state changed.
    */
    useEffect(() => {
        console.log("ProductList: Product state changed")
        console.log(products)
    }, [products])

    return (
        <div className="products">
        {
            products.map(prod => <Product key={prod.id} product={prod} />)
        }
        </div>
    )
}