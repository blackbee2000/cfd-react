import { api, callAPI, callAPIWithToken } from "./config";

const courseService = {
    home(){
        return callAPI(`${api}/elearning/v4/home`);
    },
    detail(slug){
        return callAPI(`${api}/elearning/v4/course/${slug}`);
    },
    register(slug, data){
        return callAPIWithToken(
            `${api}/elearning/v4/course-register/${slug}`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    },
    related(slug){
        return callAPI(`${api}/elearning/v4/course-related/${slug}`);
    },
    listCourse(){
        return callAPI(`${api}/elearning/v4/courses`);
    }
}

export default courseService;