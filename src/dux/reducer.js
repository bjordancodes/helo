import axios from 'axios';

const initialState = {
 userid: '',
 username: '',
 profilepic: ''
}

const GET_USER = 'GET_USER';

export const get_user = () => {
    return {
        type: GET_USER,
        payload: 
    }
}