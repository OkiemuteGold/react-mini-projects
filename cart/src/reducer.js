const reducer = (state, action) => {
    const newCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.itemId;
    });

    const increaseCart = state.cart.map(cartItem => {
        if (cartItem.id === action.itemId) {
            const amount = cartItem.amount + 1;
            // state.total = amount * cartItem.price;

            return {
                ...cartItem,
                amount: amount
            };
        }
        // console.log(state.total);
        return cartItem;
    });

    const decreaseCart = state.cart.map(cartItem => {
        if (cartItem.id === action.itemId) {
            const amount = cartItem.amount - 1;

            return {
                ...cartItem,
                amount: amount
            };
        }
        return cartItem;
    });

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
                cart: decreaseCart,
            };
            break;

        default:
            break;
    }

    return state;
};

export default reducer;
