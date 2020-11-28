import React, { useState } from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProduct = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getProducts)
    }

    /*
        You return a context provider which has the
        `products` state, the `addProduct` function,
        and the `getProduct` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, addProduct, getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}