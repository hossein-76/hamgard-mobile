import {GET_USER_INFO} from '../Actions/Types'

const initialState = {
    user: null
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_USER_INFO:
            return {
                ...state,
                user: action.payload
            }
        default: {
            return state;
        }
    }
}