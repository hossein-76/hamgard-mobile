import { GET_EVENTS, SELECT_EVENT, UNSELECT_EVENT } from "./Types";
import {APIRequest} from '../Services/APIService'

const getEvents = () => async (dispatch, getState) => {
  new Promise((resolve, reject) => {
    const url = "events/"; //need change

    const options = {
      method: "GET"
    };

    const token = JWTController.GetUserToken();

    APIRequest(options, url, token)
      .then(data => {
        dispatch({
          type: GET_EVENTS,
          payload: data
        });
        resolve(data);
      })
      .catch(error => {
        reject({ error });
      });
  });
};

const SelectEvent = (eventID) => async (dispatch, getState) =>
    {
        alert('an');
        dispatch({
          type: SELECT_EVENT,
          payload: eventID
        });
        
     
    };

  const UnselectEvent = (eventID) => async (dispatch, getState) =>
  new Promise((resolve, reject) => {
   
    
        dispatch({
          type: UNSELECT_EVENT,
          payload: eventID
        });
        
     
  });

  const EventActions = {
    getEvents,
    SelectEvent,
};
export { EventActions };
