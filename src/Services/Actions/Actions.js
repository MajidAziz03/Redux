import { ADD_TO_CART } from '../Constants.js'

export const addToCart = (data) => {
    return {
        data,
        type : ADD_TO_CART
    }

}

export const removeToCart = (data) => {
    return {
        data,
        type: 'Remove_TO_CART'
    }

}

