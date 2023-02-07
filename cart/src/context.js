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

    const increaseItem = (id) => {
        dispatch({
            type: "INCREASE_ITEM",
            itemId: id
        })
    };

    const decreaseItem = (id) => {
        dispatch({
            type: "DECREASE_ITEM",
            itemId: id
        })
    };

    const contextValues = {
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem
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
