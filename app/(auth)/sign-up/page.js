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
  const backendURL = `https://lamarefbackend.onrender.com/auth/register`;

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
        console.log(dataReceived);
        if (response.status === 201) {
          toast.success('Registration successful!', {
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
        router.push('/sign-in');
      }
    } catch (error) {
      console.log(error);
      if (error.res && error.response.status === 409) {
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
        toast.warn('Username is already taken!', {
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
        <label className="text-sm font-medium text-gray-700 dark:text-white">
          Enter username
        </label>
        <input
          className="px-2 py-2 font-medium text-black shadow-md dark:bg-slate-700 dark:text-white"
          id="username"
          type="text"
          value={username}
          name="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="text-sm font-medium text-gray-700 dark:text-white">
          Enter password
        </label>
        <input
          className="px-2 py-2 font-medium text-black shadow-md dark:bg-slate-700 dark:text-white"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          id="submit"
          className="py-2 font-semibold text-white bg-blue-700 rounded-lg dark:primary-gradient"
          type="submit"
          onClick={submitForm}
        >
          Submit
        </button>
        <div className="flex items-center justify-center">
          <p> already have an account?</p>
          <Link
            className="ml-1 text-blue-500 dark:text-yellow-400 hover:underline"
            href={'/sign-in'}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
