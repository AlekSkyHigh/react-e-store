const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

export const CartReducer = (state, action) => {

    let index = -1;

    if (action.payload) {
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }

    let newItems = [...state.cartItems];

    switch (action.type) {
        case "ADD":
        case "INCQTY":
            if (index === -1) {
                // state.cartItems.push({ ...action.payload, quantity: 1 });
                newItems.push({ ...action.payload, quantity: 1 });
            }
            else {
                // state.cartItems[index].quantity++;
                newItems[index] = { ...newItems[index], quantity: newItems[index].quantity + 1 };
            }
            break;

        case "REMOVE":
            if (index > -1) {
                // state.cartItems.splice(index, 1); // BAD WAY...
                newItems = state.cartItems.filter(x => x.id !== action.payload.id); // Good Way..
            }
            break;

        case "DECQTY":
            if (index > -1 && newItems[index].quantity > 1) {
                newItems[index] = { ...newItems[index], quantity: newItems[index].quantity - 1 };
            }
            break;

        case "CLEAR":
            newItems = [];
            break;
        default:
    }

    Storage(newItems);
    return { ...state, cartItems: newItems };
}