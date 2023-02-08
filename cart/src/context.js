import React, { useState, useContext, useReducer, useEffect } from 'react'
import { cartItems } from './data'
import reducer from './reducer';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART"
        });
    };

    const removeItem = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            itemId: id
        });
    };

    // const decreaseItem = (id) => {
    //     dispatch({
    //         type: "DECREASE_ITEM",
    //         itemId: id
    //     })
    // };

    const toggleAmount = (id, type) => {
        dispatch({
            type: "TOGGLE_AMOUNT",
            payloadId: id,
            payloadType: type
        });
    };

    const fetchProducts = async () => {
        dispatch({
            type: "LOADING",
        });

        const response = await fetch(url);
        const cart = await response.json();
        // console.log(cart);

        dispatch({
            type: "FETCH_PRODUCTS",
            payload: cart
        });
    };

    useEffect(() => {
        dispatch({
            type: "GET_TOTAL",
        });
    }, [state.cart]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const contextValues = {
        ...state,
        clearCart,
        removeItem,
        // decreaseItem,
        toggleAmount
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppProvider };
