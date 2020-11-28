import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "../location/LocationProvider";
import { LocationList } from "../location/LocationList";
import { ProductProvider } from "../product/ProductProvider";
import { ProductList } from "../product/ProductList";

export const ApplicationViews = (props) => {
    return (
        <>
            <h2>Locations</h2>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <h2>Products</h2>
            <ProductProvider>
                {/* Render the animal list when http://localhost:3000/prodcuts */}
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}



    