import React, { useState } from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    const addProductType = productType => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productType)
        })
            .then(getProductTypes)
    }

    /*
        You return a context provider which has the
        `productTypes` state, the `addProductType` function,
        and the `getProductType` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductTypeContext.Provider value={{
            productTypes, addProductType, getProductTypes
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}