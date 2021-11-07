import { createStore, combineReducers, applyMiddleware} from 'redux';
import authReduer from './reducer/authReducer';
import courseReducer from './reducer/courseReducer';

const reducer = combineReducers({
    auth: authReduer,
    course: courseReducer
})

const thunk = store => next => action => {

    if(typeof action === 'function'){
        action(store.dispatch);
    }
    else{
        next(action);
    }
}

const store = createStore(
    reducer, 
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;