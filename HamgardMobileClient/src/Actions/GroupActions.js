import {APIRequest} from '../Services/APIService';
import JWTController from '../Controllers/AuthenticationController';
import {GET_GROUPS} from './Types';


const GetGroups = async (userID) => 
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