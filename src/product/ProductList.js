import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"
import { LocationContext } from "../location/LocationProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProducts() 
        getProductTypes()
        getLocations()

    }, [])
    // debugger
    
    if ( products.length && productTypes.length && locations.length) {
        // this logic prevents the website from breaking if getProductTypes takes too long
        // because the .then was returning an empty array each time
    return (
        <div className="products">
        <h2>Products</h2>
        {
            products.map(prod => {
                {/* debugger */}
                const displayType = productTypes.find(ty => ty.id === prod.productTypeId)
                const locale = locations.find(lo => lo.id === prod.locationId)

                return <Product key={prod.id} 
                                product={prod}
                                type={displayType}
                                location={locale} />
            })
        }
        </div>
    )} else { return <div></div> }
}
