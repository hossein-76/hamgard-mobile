import {APIRequest} from '../Services/APIService';
import JWTController from '../Controllers/AuthenticationController';
import {GET_USER_INFO} from './Types';


export const GetUserInfo = () => async (dispatch, getState) =>
{
    new Promise((resolve, reject) => {
        const url = 'groups/'; //need change

        const options = {
            method: 'GET'
        };

        const token = JWTController.GetUserToken();

        APIRequest(options, url, token)
            .then((data) => {
                dispatch({
                    type: GET_USER_INFO,
                    payload: data
                });
                resolve(data);
            })
            .catch((error) => {
                reject({ error });
            });
    })
} 

