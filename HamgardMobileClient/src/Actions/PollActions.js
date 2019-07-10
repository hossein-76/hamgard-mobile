import {APIRequest} from '../Services/APIService'
import {GET_POLL, VOTE, UNVOTE} from './Types'

  export const getPoll = (GroupID, POllID) => async (dispatch, getState) => {
      new Promise((resolve, reject) => {
        const bodyData = {group_id: GroupID, id: POllID}
        const url = "poll/retrievepoll2/";
        const urlFirst = "group/";
        const options = {
          method: "POST",
          body: JSON.stringify(bodyData)
        };
    
        APIRequest(options, urlFirst, url, true)
        .then((data) => data.json())
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
    
  export const unVote = () => 
      ({
        type: UNVOTE,
        payload: null
      });
  
    export const SendVote = (groupID, pollID, choices) => async (dispatch, getState) => {
      new Promise((resolve, reject) => {
        const bodyData = {group_id: groupID, poll_id: pollID, choices: choices}
        const url = "poll/vote/";
        const urlFirst = "group/";
        const options = {
          method: "POST",
          body: JSON.stringify(bodyData)
        };
    
        APIRequest(options, urlFirst, url, true)
        .then((data) => data.json())
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

  