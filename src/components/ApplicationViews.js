import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "../location/LocationProvider";
import { LocationList } from "../location/LocationList";
import { ProductProvider } from "../product/ProductProvider";
import { ProductList } from "../product/ProductList";
import { EmployeeProvider } from "../employee/EmployeeProvider";
import { EmployeeList } from "../employee/EmployeeList";
import { EmployeeForm } from "../employee/EmployeeForm";
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
            
            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />

                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />
                </EmployeeProvider>
            </LocationProvider>
        </>
    )
}



    