import {GET_GROUPS, LOAD_GROUP, CREATE_GROUP} from '../Actions/Types'

const initialState = {
    groups : [],
    loadedGroup: {name: 'گروه 1', members: [{key: "1", name: "ali"},
                                            {key: "2", name: "hossein"},
                                            {key: "3", name: "mehdi"},
                                            {key: "4", name: "mehdi"},
                                            {key: "5", name: "mehdi"},
                                            {key: "6", name: "mehdi"}],
                                  polls: [{key: "1", name: "ali"},
                                            {key: "2", name: "hossein"},
                                            {key: "3", name: "mehdi"},
                                            {key: "4", name: "mehdi"},
                                            {key: "5", name: "mehdi"},
                                            {key: "6", name: "mehdi"}]}
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
        tmp.push(action.payload); 
        return {
            ...state,
            groups: tmp
        }
        default: {
            return state;
        }
    }
}