import {AsyncStorage} from 'react-native'

var STORAGE_KEY = 'id_token';

const  APIRequest = async (options, urlFirst, url, needToken) => {
    let token = {};
    if(needToken)
    {
        tmp = await AsyncStorage.getItem(STORAGE_KEY);
        token = {authorization: tmp}
    }
    else
    {
        token = {}
    }
    return new Promise((resolve, reject) => {
        fetch(`http://192.168.43.209:8000/${urlFirst}api/v1/${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...token
            }
        })
            .then((data) => {
               // console.log('receved_data: ', data);
                resolve(data);
            })
            .catch((error) => {
                reject(error);
                console.log('error: ', error);
            });
    });
};


export { APIRequest };
