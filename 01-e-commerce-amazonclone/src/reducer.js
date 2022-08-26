/* 
    Here we define all the application 
    level states and define actions
    to make changes to the state;
*/
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './constants/cartConstants';
export const initialState = {
    cart: [],
}
// Selector
export const getCartToal = (cart) => {
    return(cart?.reduce( (total, item) => {
        return total += item.price;
    }, 0));
}
const reducer = (state, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        
        default:
            return state;
    }
}

export default reducer;

