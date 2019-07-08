import {GET_GROUPS, LOAD_GROUP} from '../Actions/Types'

const initialState = {
    groups : [],
    loadedGroup: {name: 'گروه 1', members: [{key: "1", name: "ali"},
                                            {key: "2", name: "hossein"},
                                            {key: "3", name: "mehdi"},
                                            {key: "3", name: "mehdi"},
                                            {key: "3", name: "mehdi"},
                                            {key: "3", name: "mehdi"}]}
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
        default: {
            return state;
        }
    }
}