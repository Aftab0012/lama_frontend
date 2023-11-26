'use client';

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function Register() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const backendURL = `http://localhost:3002/auth/login`;

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: username,
        password: password,
      };
      if (validateInput(data)) {
        const response = await axios.post(backendURL, data);
        const dataReceived = response.data;

        persistLogin(dataReceived);

        if (response.status === 200) {
          toast.success('Login successful!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
        console.log('Navigating to /sign-in');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      if (error.res && error.response.status === 400) {
        toast.error('Something went wrong!!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        toast.warn('Username does not exist!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    }
  };

  const persistLogin = (dataReceived) => {
    localStorage.setItem('token', dataReceived.token);
    localStorage.setItem('username', dataReceived.username);
    localStorage.setItem('id', dataReceived._id);
  };

  const validateInput = (data) => {
    if (data.username === '') {
      toast.warn('Username is required!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return false;
    }
    if (data.username.length < 6) {
      toast.warn('Username must be at least 6 characters', {
        position: 'top-right',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return false;
    }
    if (data.password === '') {
      toast.warn('Password is a required field', {
        position: 'top-right',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return false;
    }
    if (data.password.length < 6) {
      toast.warn('Password must be at least 6 characters', {
        position: 'top-right',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return false;
    }
    return true;
  };

  return (
    <div className="max-w-md p-8 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <form className="flex flex-col gap-4">
        <label
          htmlFor="username"
          className="text-sm font-medium text-gray-700 dark:text-white"
        >
          Enter username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          className="px-2 py-2 font-medium text-black shadow-md dark:bg-slate-700 dark:text-white"
        />
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 dark:text-white"
        >
          Enter password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-2 py-2 font-medium text-black shadow-md dark:bg-slate-700 dark:text-white"
        />
        <button
          id="submit"
          type="submit"
          onClick={submitForm}
          className="py-2 font-semibold text-white bg-blue-700 rounded-lg dark:primary-gradient"
        >
          Submit
        </button>
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
          </p>
          <Link href={'/sign-up'}>
            <p className="ml-1 text-blue-500 dark:text-yellow-400 hover:underline">
              Register
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
