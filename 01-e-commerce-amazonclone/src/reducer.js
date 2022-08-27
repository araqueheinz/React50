/* 
    Here we define all the application 
    level states and define actions
    to make changes to the state;
*/
import { CART_ADD_ITEM, CART_REMOVE_ALL_ITEMS } from './constants/cartConstants';
export const initialState = {
    cart: [],
}
// Selector
export const getCartToal = (cart) => {
    return(cart?.reduce( (total, item) => {
        return total += (item.price * item.quantity);
    }, 0));
}

export const getTotalItems = (cart) => {
    return (cart?.reduce((total, item) => {
        return total += item.quantity;
    }, 0));
}

const reducer = (state, action) => {
    let index = state.cart.findIndex( item => item.id === action.payload.id);
    let cartState = [...state.cart];

    switch(action.type) {
        case CART_ADD_ITEM:
            if(index >= 0) {
                cartState[index] = { ...cartState[index], quantity: cartState[index].quantity++ || 1}
                return {
                    ...state,
                    cart: [...cartState]
                }
            } else {
                cartState = {...action.payload, quantity: 1}
                return {
                    ...state,
                    cart: [...state.cart, cartState],
                }
            }
        case CART_REMOVE_ALL_ITEMS:
            if(index < 0 ) return;
            cartState.splice(index, 1);
            return {
                ...state,
                cart: [...cartState],
            } 
        default:
            return state;
    }
}

export default reducer;

