// is me hum initial stated define krtay hai or bhi bht cheexein hai
// is me humhne 2 paraeteres chayeye hotay hai or or uskay ilawa hum switch use krtay hai for diff cases
import { ADD_TO_CART } from "../Constants"


const initialState = {
    cardData:[]
}

export default function cardItem(state=initialState, action)
{
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
            break;
        default:
            return state
        
    }
}
