import {GET_POLL, VOTE, UNVOTE} from '../Actions/Types'

const initialState = {
  loadedPoll: {
    title: "نظرسنجی 1",
    events: [
      { key: "1", id: "1", title: "Title", category: "Category" },
      { key: "2", id: "2", title: "Title", category: "Category" },
      { key: "3", id: "3", title: "Title", category: "Category" },
      { key: "4", id: "4", title: "Title", category: "Category" },
      { key: "5", id: "5", title: "Title", category: "Category" }
    ],
    votedEvent: null
  }
};

export const PollReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_POLL:{
            return{
                ...state,
                loadedPoll: action.payload
            }
        }
        case VOTE:{
            return {
                ...state,
                votedEvent: action.payload
            }
        }
        case UNVOTE:{
            return {
                ...state,
                votedEvent: null
            }
        }
        default: {
            return state;
        }
    }
}