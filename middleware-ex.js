const { createStore, applyMiddleware } = require('redux');


const thunk = require('redux-thunk').thunk; 
const axios = require('axios');

const initialState = {
    loading : false,
    users : [],
    error : ''
};

// Action types 

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

function userReducer(state = initialState , action){
    switch(action.type){
        case FETCH_USERS_REQUEST :
            return {
                ...state , loading :  true,
            };
        case FETCH_USERS_SUCCESS :
            return {
                loading : false ,
                users : action.payload,
                error : ''
            };
        case FETCH_USERS_FAILURE : 
        return {
            loading : false ,
            users : [],
            error : action.payload
        }    
        default :
        return state;
    }

}

const logger = (store) => (next) => (action) => {
    console.log('Dispatching',action);
    const result = next(action);
    console.log('Next State ', store.getState());
    return result;
}

    const store = createStore(userReducer , applyMiddleware(logger , thunk));

    


    // Action creators
const fetchUsersRequest = () => {
  return { type: FETCH_USERS_REQUEST };
};

const fetchUsersSuccess = (users) => {
  return { type: FETCH_USERS_SUCCESS, payload: users };
};

const fetchUsersFailure = (error) => {
  return { type: FETCH_USERS_FAILURE, payload: error };
};

// thunk action creator

const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersRequest());
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data.map((user)=>user.name);
        dispatch(fetchUsersSuccess(users));
    }
    catch(err){
        dispatch(fetchUsersFailure(err.message));
    }
};
store.dispatch(fetchUsers());



