import { GET_PRODUCT, ADD_PRODUCT, SEARCH_PRODUCTS, CLEAR_CART } from "../actionsTypes";

export const getProducts = (payload) => ({
    type: GET_PRODUCT,
    payload,
});

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload,
});

export const getSearchValue = (payload) => ({
    type: SEARCH_PRODUCTS,
    payload,
})
export const clearCart = () => ({
    type: CLEAR_CART,
})