import { GET_EVENTS, SELECT_EVENT, UNSELECT_EVENT } from '../Actions/Types'


const initialState = {
    events : [{key:"",ID:"1", title: "Title", category:"Category"},
                {key:"",ID:"2", title: "Title", category:"Category"},
                {key:"",ID:"3", title: "Title", category:"Category"},
                {key:"",ID:"4", title: "Title", category:"Category"},
                {key:"",ID:"5", title: "Title", category:"Category"},
                {key:"",ID:"6", title: "Title", category:"Category"},
                {key:"",ID:"7", title: "Title", category:"Category"},
                {key:"",ID:"8", title: "Title", category:"Category"},
                {key:"",ID:"9", title: "Title", category:"Category"},],
    chosen : []
}

export const EventReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_EVENTS:
            return {
                ...action.payload
            }
        case SELECT_EVENT:
        {
            let tmp = [...state.chosen];
            tmp.push(action.payload);
            alert(tmp);
            return {
                ...state,
                chosen: tmp
            }
        }
        case UNSELECT_EVENT: {
            let tmp = [...state.chosen];
            tmp.filter(x => x != action.payload);
            return{
                ...state,
                chosen: tmp
            }
        }
        default: {
            return state;
        }
    }
}