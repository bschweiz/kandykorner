import React from "react"
// import { Route } from "react-router-dom"
import { LocationProvider } from "../location/LocationProvider"
import { LocationList } from "../location/LocationList"
import { ProductProvider } from "../product/ProductProvider"
import { ProductList } from "../product/ProductList"


export const KandyKorner = (props) => {
    return (
        <>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        
        <h2>Products</h2>
        <ProductProvider>
            <ProductList />
        </ProductProvider>
        </>
    )
}
    