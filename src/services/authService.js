import { api, callAPI, callAPIWithToken } from "./config";

const authService = {
    login(user){
        return callAPI(
            `${api}/elearning/v4/login`, 
            {   method: 'POST', 
                headers: {
                    'Content-Type' : "application/json"        
                },
                body: JSON.stringify(user)
            }
        );
    },
    updateInfo(form){
        return callAPIWithToken(
            `${api}/elearning/v4/profile/update`,
            {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'Content-Type' : "application/json"
                }
            }
        )
    }
}
export default authService;