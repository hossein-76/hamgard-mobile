import {APIRequest} from '../Services/APIService'
import {GET_POLL, VOTE, UNVOTE} from './Types'

  export const getPoll = () => async (dispatch, getState) => {
      new Promise((resolve, reject) => {
        const url = "events/"; //need change
    
        const options = {
          method: "GET"
        };
    
        const token = JWTController.GetUserToken();
    
        APIRequest(options, url, token)
          .then(data => {
            dispatch({
              type: GET_POLL,
              payload: data
            });
            resolve(data);
          })
          .catch(error => {
            reject({ error });
          });
      });
    };

  export const vote = (event) =>
            ({
              type: VOTE,
              payload: event
            })
    
  export const unVote = () => async (dispatch, getState) => 
      ({
        type: UNVOTE,
        payload: null
      });

  export const CreatePoll = (groupData) =>async (dispatch, getState) => {
    new Promise((resolve, reject) => {
      const url = "poll/createpoll/"; //need change
      const urlFirst = 'group/'
      const options = {
        method: "POST",
        body:JSON.stringify(groupData)
      };


      APIRequest(options, urlFirst, url, true)
        .then(data => {
          dispatch({
            type: GET_POLL,
            payload: data
          });
          resolve(data);
        })
        .catch(error => {
          reject({ error });
        });
    });
  };

  