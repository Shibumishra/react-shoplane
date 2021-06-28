import * as actionsTypes from "../actionsTypes"

// { ADD_PRODUCT, GET_PRODUCT, UPDATE_CARD }
const initialState = {
    products: [],
    originalProducts: [],
    cart: [],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionsTypes.ADD_PRODUCT:
        return { ...state,   cart:[...state.cart, payload] }
    
    case actionsTypes.GET_PRODUCT:
        return { ...state, products: payload, originalProducts: payload }

    case actionsTypes.SEARCH_PRODUCTS:{
        const filterProducts = state.originalProducts.filter(
        ({name}) => 
        
        name && name.toLowerCase().includes(payload && payload.toLowerCase())
        )
        return { ...state, products: filterProducts }    
    }
    case actionsTypes. CLEAR_CART:
        return { ...state, cart: [] };

    default:
        return state
    }
}
