const reducer = (state, action) => {
    const newCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.itemId;
    });

    // const updatedCart = state.cart.map(cartItem => {
    //     if (cartItem.id === action.itemId) {
    //         let amount;
    //         if (action.type === "INCREASE_ITEM") {
    //             amount = cartItem.amount + 1;
    //         }
    //         if (action.type === "DECREASE_ITEM") {
    //             amount = cartItem.amount - 1;
    //         }

    //         return {
    //             ...cartItem, amount: amount
    //         };
    //     }
    //     return cartItem;
    // });

    const increaseCart = state.cart.map(cartItem => {
        if (cartItem.id === action.itemId) {
            const amount = cartItem.amount + 1;

            return {
                ...cartItem, amount: amount
            };
        }
        return cartItem;
    });

    const decreaseCart = state.cart.map(cartItem => {
        if (cartItem.id === action.itemId) {
            const amount = cartItem.amount - 1;

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

        case "INCREASE_ITEM":
            return {
                ...state,
                cart: increaseCart,
            };
            break;

        case "DECREASE_ITEM":
            return {
                ...state,
                cart: decreaseCart.filter(item => {
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

        default:
            break;
    }

    return state;
};

export default reducer;
