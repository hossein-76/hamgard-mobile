import {APIRequest} from '../Services/APIService';
import {AsyncStorage,} from 'react-native'
import JWTController from '../Controllers/AuthenticationController';
import {GET_GROUPS, CREATE_GROUP} from './Types';


export const GetGroups = () => async (dispatch, getState) => 
{
    new Promise((resolve, reject) => {
        const url = 'groups/';

        const options = {
            method: 'GET'
        };


        APIRequest(options, url, true)
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


        APIRequest(options, url, true)
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
        const url = 'create_group/';
        const options = {
            method: 'POST',
            body: JSON.stringify(groupData)
        };

        APIRequest(options, url, true)
            .then((response) => {
                dispatch({
                    type: CREATE_GROUPS,
                    payload: groupData
                });
                resolve(response);
            })
            .catch((error) => {
                reject({ error });
            });
    })
}

