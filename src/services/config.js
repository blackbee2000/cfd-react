export const api = 'http://cfd-reactjs.herokuapp.com';

export const callAPI = (url, options) =>{
    return fetch(url, options).then(res => handleResponse(res, url, options));
}

export const callAPIWithToken = (url, options) =>{
    const token = JSON.parse(localStorage.getItem('token'))?.accessToken;
    return fetch(
        url,
        {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `Bearer ${token}`
            }
        }
    ).then(res => handleResponse(res, url, options))

}

const refreshToken = async () =>{
    const refreshToken = JSON.parse(localStorage.getItem('token'))?.refreshToken;

    let res = await fetch(
        `${api}/elearning/v4/refresh-token`,
        {
            method: 'POST',
            body: JSON.stringify({
                refreshToken
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }
    ).then(res => res.json());

    localStorage.setItem('token', JSON.stringify(res.data));
}

export const handleResponse = async (res, url, options) => {
    if(res.status === 403){
        await refreshToken();
        let token = JSON.parse(localStorage.getItem('token'))?.accessToken;
        return fetch(
            url,
            {
                ...options,
                headers: {
                    ...options.headers,
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then(res => res.json());
    }
    return res.json();
}