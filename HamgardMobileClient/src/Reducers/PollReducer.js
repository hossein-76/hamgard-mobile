import {GET_POLL, VOTE, UNVOTE} from '../Actions/Types'

const initialState = {
  loadedPoll: {},
    votedEvent: null
  
};

export const PollReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_POLL:{
            let tmpChoices = [];
            for(let i = 0 ; i < action.payload.choices.length ; i++)
            {
                tmpChoices.push({key:"" + i, ...action.payload.choices[i]})
            }
            const tmpPoll = {question: action.payload.question,
                                id: action.payload.id,
                                vote_count: action.payload.vote_count,
                                choices: tmpChoices}
            return{
                ...state,
                loadedPoll: tmpPoll
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