const  APIRequest = async (options, url, token) => {
    return new Promise((resolve, reject) => {
        fetch(`http://172.18.218.231:8000/user/api/${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...token
            }
        })
            .then((data) => data.json())
            .then((data) => {
                console.log('receved_data: ', data);
                resolve(data);
            })
            .catch((error) => {
                reject(error);
                console.log('error: ', error);
            });
    });
};


export { APIRequest };
