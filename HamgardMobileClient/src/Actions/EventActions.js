import { GET_EVENTS, SELECT_EVENT, UNSELECT_EVENT } from "./Types";
import {APIRequest} from '../Services/APIService'

export const getEvents = () => async (dispatch, getState) => {
  new Promise((resolve, reject) => {
    const url = "geteventsandplaces/"; //need change
    const urlFirst = 'event/'
    const options = {
      method: "GET"
    };


    APIRequest(options, urlFirst, url, true)
    .then((data) => data.json())
      .then(data => {

        let tmp = [];
        for(let i = 0 ; i < data.length ; i++)
        {
            tmp.push({key:"" + i, ...data[i]})
        }
        dispatch({
          type: GET_EVENTS,
          payload: tmp
        });
        resolve(data);
      })
      .catch(error => {
        reject({ error });
      });
  });
};

export const SelectEvent = (selectedItem) =>
        ({
          type: SELECT_EVENT,
          payload: selectedItem
        });


export  const UnselectEvent = (item) =>
        ({
          type: UNSELECT_EVENT,
          payload: item
        });
        
     
  


