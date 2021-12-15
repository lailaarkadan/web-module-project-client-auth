import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const initFromVal = {
    username: '',
    password: ''
}

const Login = ()=> {
    const [credentials,setCredentials] = useState(initFromVal);
    const { push } = useHistory();

    const handleChange = (e) => {
       setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', resp.data.payload);
            push('/friends');
        })
        .catch(err => console.log(err))
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type='text' name='username' onChange={handleChange} value={credentials.username}/>
  
          <label>Password</label>
          <input type='text' name='password' onChange={handleChange} value={credentials.password}/>

          <button>Log In</button>
        </form>
      </div>
    )
  }

export default Login;