import { GET_LIST_COURSE } from "../type";

const initalStateCourse = {
    offline: null,
    online: null,
}

export default function courseReducer(state = initalStateCourse, action){
    switch (action.type) {
        case GET_LIST_COURSE:
          return {
            ...state,
            offline: action.payload.offline,
            online: action.payload.online
        };
    }
    return state;
}