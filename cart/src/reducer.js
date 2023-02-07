const reducer = (state, action) => {
    const newCart = state.cart.filter((item) => {
        return item.id !== action.itemId;
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

        default:
            break;
    }

    return state;
};

export default reducer;
