/**
 * Author: Kailash kumar
 */
// Base URL of API
const BASE_API_URL = 'http://18.220.133.177:8000/';

class UserApi {

    /**
     * To get list of company list based on business ID
     */
    static userAuthentication(username, password) {
        debugger;
        console.log("username" + username + "password" + password);
        const user = {
            UserId: username,
            Password: password
        }
        return fetch(`${BASE_API_URL}` + 'login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'UserId': username,
                'Password': password,
            })
        }).then((response) => {
            return response.json()
        }).then(json => {
            return json;
        });
    }
}

export default UserApi;