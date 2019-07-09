import {GET_GROUPS, LOAD_GROUP, CREATE_GROUP} from '../Actions/Types'

const initialState = {
    groups : [],
    loadedGroup: {}
}

export const GroupReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_GROUPS:
            return {
                ...state,
                groups: [...action.payload]
            }
        case LOAD_GROUP:
            return {
                ...state,
                loadedGroup: {...action.payload}
            }
        case CREATE_GROUP:
        let tmp = [...state.groups]
        tmp.push({key:"" + tmp.length + 1, ...action.payload}); 
        return {
            ...state,
            groups: tmp
        }
        default: {
            return state;
        }
    }
}