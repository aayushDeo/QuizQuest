import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/user/register', { username, email, password });
      console.log(response.data);
      // Handle successful registration (e.g., redirect to login, etc.)
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };

  return (
  <>
  <div className="container">
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="register-username">Username:</label>
          <input id="register-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="register-email">Email:</label>
          <input id="register-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="register-pass">Password:</label>
          <input id="register-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  </>
    
  );
};

export default Register;
