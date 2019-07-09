import {APIRequest} from '../Services/APIService';
import JWTController from '../Controllers/AuthenticationController';
import {GET_GROUPS} from './Types';


export const GetGroups = () => async (dispatch, getState) => 
{
    new Promise((resolve, reject) => {
        const url = 'groups/';

        const options = {
            method: 'GET'
        };

        const token = JWTController.GetUserToken();

        APIRequest(options, url, token)
            .then((data) => {
                dispatch({
                    type: GET_GROUPS,
                    payload: data
                });
                resolve(data);
            })
            .catch((error) => {
                reject({ error });
            });
    })
    
}   

export const LoadGroup =  (GroupID) => async (dispatch, getState) => 
{
    new Promise((resolve, reject) => {
        const url = 'groups/';

        const options = {
            method: 'GET',
            group_id: GroupID
        };

        const token = JWTController.GetUserToken();

        APIRequest(options, url, token)
            .then((data) => {
                dispatch({
                    type: GET_GROUPS,
                    payload: data
                });
                resolve(data);
            })
            .catch((error) => {
                reject({ error });
            });
    })
    
}   

export const CreateGroup = (groupData) => async (dispatch, getState) => 
{
    new Promise((resolve, reject) => {
        const url = 'groups/';

        const options = {
            method: 'GET',
            group_id: GroupID
        };

        const token = JWTController.GetUserToken();

        APIRequest(options, url, token)
            .then((response) => {
                dispatch({
                    type: GET_GROUPS,
                    payload: groupData
                });
                resolve(response);
            })
            .catch((error) => {
                reject({ error });
            });
    })
}

