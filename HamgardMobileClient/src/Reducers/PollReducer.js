import {GET_GROUPS, LOAD_GROUP} from '../Actions/Types'

const initialState = {
    Polls : [],
    loadedPoll: {name: 'گروه 1', members: [{key: "1", name: "ali"},
                                            {key: "2", name: "hossein"},
                                            {key: "3", name: "mehdi"},
                                            {key: "3", name: "mehdi"},
                                            {key: "3", name: "mehdi"},
                                            {key: "3", name: "mehdi"}]}
}

export const PollReducer = (state = initialState, action) => {
    switch(action.type)
    {
        default: {
            return state;
        }
    }
}