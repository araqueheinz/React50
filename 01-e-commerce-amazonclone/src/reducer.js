/* 
    Here we define all the application 
    level states and define actions
    to make changes to the state;
*/
export const initialState = {
    cart: [],
}
// Selector
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            console.log(state)
            console.log(action)
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        
        default:
            return state;
    }
}

export default reducer;

