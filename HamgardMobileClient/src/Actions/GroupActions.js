import {APIRequest} from '../Services/APIService';
import {AsyncStorage,} from 'react-native'
import JWTController from '../Controllers/AuthenticationController';
import {GET_GROUPS, CREATE_GROUP, LOAD_GROUP} from './Types';


export const GetGroups = () => async (dispatch, getState) => 
{
    new Promise((resolve, reject) => {
        const url = 'groups/';
        const urlFirst = 'group/'
        const options = {
            method: 'GET'
        };


        APIRequest(options,urlFirst, url, true)
        .then((data) => data.json())
            .then((data) => {
                let tmp = [];
                for(let i = 0 ; i < data.length ; i++)
                {
                    tmp.push({key:"" + i, ...data[i]})
                }

                
                dispatch({
                    type: GET_GROUPS,
                    payload: tmp
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
   return new Promise((resolve, reject) => {
        const url = 'group/';
        const urlFirst = 'group/'
        const GID = {group_id: GroupID}
        const options = {
            method: 'POST',
            body: JSON.stringify(GID)
        };


        APIRequest(options,urlFirst, url, true)
        .then((data) => data.json())
            .then((data) => {
                dispatch({
                    type: LOAD_GROUP,
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
   return  new Promise((resolve, reject) => {
        const url = 'create_group/';
        const urlFirst = 'group/'
        const options = {
            method: 'POST',
            body: JSON.stringify(groupData)
        };

        APIRequest(options, urlFirst, url, true)
            .then((response) => {
               
                dispatch({
                    type: CREATE_GROUP,
                    payload: groupData
                });
                resolve(response);
            })
            .catch((error) => {
                reject({ error });
            });
    })
}

