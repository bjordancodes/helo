import axios from 'axios';

const initialState = {
 user: '',
 posts: '',
 isLoading: false
}

const GET_USER = 'GET_USER';
const GET_POSTS = 'GET_POSTS';

export const getUsers = () => {
    return {
        type: GET_USER,
        payload: axios.get('/user')
        .then(response => response)
        .catch(err => console.log(err))
    }
}

export const getPosts = () => {
    return {
        type: GET_POSTS,
        payload: axios.get('/posts')
        .then(response => response)
        .catch(err => console.log(err))

    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case `${GET_USER}_PENDING`:
        return{
            ...state,
            isLoading: true
        }
        case `${GET_USER}_FULFILLED`:
        return{
            ...state,
            user: action.payload,
            isLoading: false
        }
        case `${GET_POSTS}_PENDING`:
        return{
            ...state,
            isLoading: true
        }
        case `${GET_POSTS}_FULFILLED`:
        return{
            ...state,
            posts: action.payload,
            isLoading: false
        }
    default: return state;
    }
}