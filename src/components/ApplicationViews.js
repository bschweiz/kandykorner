import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "../location/LocationProvider";
import { LocationList } from "../location/LocationList";
import { ProductProvider } from "../product/ProductProvider";
import { ProductList } from "../product/ProductList";
import { ProductTypeProvider } from "../product/ProductTypeProvider";

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <LocationProvider>
            <ProductProvider>
                <ProductTypeProvider>
                    {/* Render the animal list when http://localhost:3000/prodcuts */}
                    <Route exact path="/products">
                        <ProductList />
                    </Route>
                </ProductTypeProvider>
            </ProductProvider>
            </LocationProvider>
        </>
    )
}



    