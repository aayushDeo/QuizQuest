import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="relative py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <h1 className="ml-4 text-3xl font-bold text-gray-800 dark:text-white">QuizQuest</h1>
          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-12 sm:p-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">Register an account</h2>
              <form action="" className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="username" className="text-gray-600 dark:text-gray-300">Username</label>
                  <input
                    value={username} onChange={(e) => setUsername(e.target.value)} required 
                    type="text"
                    name="username"
                    id="username"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-600 dark:text-gray-300">Email</label>
                  <input
                    value={email} onChange={(e) => setEmail(e.target.value)} required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="username"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>

                <div>
                  <label htmlFor="pwd" className="text-gray-600 dark:text-gray-300">Password</label>
                  <input
                    value={password} onChange={(e) => setPassword(e.target.value)} required 
                    type="password"
                    name="pwd"
                    id="pwd"
                    autoComplete="current-password"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>

                <button type="submit" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span className="relative text-base font-semibold text-white dark:text-dark">Register</span>
                </button>

                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link to="/login" className="text-primary">Login</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <span>&copy; QuizQuest</span>
            <a href="#" className="text-sm hover:text-primary">Contact</a>
            <a href="#" className="text-sm hover:text-primary">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;