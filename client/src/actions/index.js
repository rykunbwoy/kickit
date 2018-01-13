import axios from 'axios';


import { AUTH_USER } from './types';



export function signInUser({username, password}, history) {
  console.log(history, 'history');
  return function(dispatch) {

    axios.post('/api/auth/login', {username, password})
      .then(response => {
        console.log(response);

        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        history.push('/');
      })

  }
}