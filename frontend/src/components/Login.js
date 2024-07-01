import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/user/login`, { email, password });
      console.log(response.data);
      // Handle successful login (e.g., store token, redirect, etc.)
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <> 
    <div className='container'>
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login-email">Email:</label>
                <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="login-pass">Password:</label>
                <input id="login-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    </div>
    </>
  );
};

export default Login;