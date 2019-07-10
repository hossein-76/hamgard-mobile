import { GET_EVENTS, SELECT_EVENT, UNSELECT_EVENT } from '../Actions/Types'


const initialState = {
    events : [],
    selectedEvents : [],
    selectedPlaces : [],
}

export const EventReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_EVENTS:
            return {
                ...state,
                events: [...action.payload]
            }
        case SELECT_EVENT:
        {
            let tmpEvents = [...state.selectedEvents];
            let tmpPlaces = [...state.selectedPlaces];
            if(action.payload.type == 'event')
            {
                tmpEvents.push(action.payload.id);
            }
            if(action.payload.type == 'place')
            {
                tmpPlaces.push(action.payload.id);
            }
            return {
                ...state,
                selectedEvents: tmpEvents,
                selectedPlaces: tmpPlaces
            }
        }


        case UNSELECT_EVENT: {
            let tmpEvents = [...state.selectedEvents];
            let tmpPlaces = [...state.selectedPlaces];
            if(action.payload.type == 'event')
            {
                tmpEvents = tmpEvents.filter(x => x != action.payload.id );
            }
            if(action.payload.type == 'place')
            {
                tmpPlaces = tmpPlaces.filter(x => x != action.payload.id );
            }
            
            return{
                ...state,
                selectedEvents: tmpEvents,
                selectedPlaces: tmpPlaces
            }
        }
        default: {
            return state;
        }
    }
}