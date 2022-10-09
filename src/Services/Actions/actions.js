

// import { ADD_TO_CART } from "../../constants"
export const addTocart = (data) => {

    return {
        type: 'ADD_TO_CART',
        data: data
    }
}
export const removeFromocart = (data) => {
    // console.log(data);
    return {
        type: 'REMOVE_FROM_CART',
        data: data
    }
}
export const removeProduct = (data) => {
    // console.log(data);
    return {
        type: 'Remove_Product',
        data: data
    }
}
export const productFilter = (data) => {
    // console.log(data);
    return {
        type: 'productFilter',
        data: data
    }
}
