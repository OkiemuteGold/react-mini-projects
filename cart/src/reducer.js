const reducer = (state, action) => {
    const newCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.itemId;
    });

    // const decreaseCart = state.cart.map(cartItem => {
    //     if (cartItem.id === action.itemId) {
    //         const amount = cartItem.amount - 1;

    //         return {
    //             ...cartItem, amount: amount
    //         };
    //     }
    //     return cartItem;
    // });

    const updatedCartItem = state.cart.map(cartItem => {
        if (cartItem.id === action.payloadId) {
            let amount;

            if (action.payloadType === "increase") {
                amount = cartItem.amount + 1;
            }
            if (action.payloadType === "decrease") {
                amount = cartItem.amount - 1;
            }

            return {
                ...cartItem, amount: amount
            };
        }
        return cartItem;
    });

    const getCartTotal = (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        cartTotal.amount += amount;
        cartTotal.total += (price * amount);

        cartTotal.total = parseFloat(cartTotal.total.toFixed(2));

        return cartTotal;
    };

    const { total, amount } = state.cart.reduce(getCartTotal, { total: 0, amount: 0 });

    switch (action.type) {
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
            };
            break;

        case "REMOVE_ITEM":
            return {
                ...state,
                cart: newCart
            };
            break;

        // case "DECREASE_ITEM":
        //     return {
        //         ...state,
        //         cart: updateCartAmount.filter(item => {
        //             return item.amount >= 1;
        //         }),
        //     };
        //     break;

        case "TOGGLE_AMOUNT":
            return {
                ...state,
                cart: updatedCartItem.filter(item => {
                    return item.amount >= 1;
                }),
            };
            break;

        case "GET_TOTAL":
            return {
                ...state,
                total,
                amount
            };
            break;

        case "LOADING":
            return {
                ...state,
                loading: true,
            };
            break;

        case "FETCH_PRODUCTS":
            return {
                ...state,
                loading: false,
                cart: action.payload
            };
            break;

        default:
            break;
    }

    throw new Error("No matching action type");
};

export default reducer;
