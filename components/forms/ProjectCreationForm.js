'use client';

import { validateForm } from '@/utils/formValidations';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const ProjectCreationForm = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const backendURL = `http://localhost:3002/projects/add`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
    };
    if (validateForm(data)) {
      try {
        const response = await axios.post(backendURL, data, {
          headers: {
            Authorization: `Bearer ${localStorage?.getItem('token')}`,
          },
        });
        const dataReceived = response.data;
        console.log(dataReceived);
        persistLogin(dataReceived);
        console.log(response.status);
        if (response.status === 201) {
          toast.success('Media Uploaded successful!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          router.push('/');
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 409) {
          toast.error('Media with that name already exist!!', {
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
    }
  };

  const persistLogin = (dataReceived) => {
    localStorage?.setItem('projectId', dataReceived._id);
  };
  return (
    <div className="fixed w-full max-w-sm p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[300px] rounded-md shadow-md top-1/2 left-1/2 dark:bg-gray-800">
      <div className="h1-bold text-dark400_light800">Create Project</div>
      <form className="pt-4 space-y-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:text-white dark:bg-gray-700"
        />
      </form>

      <div className="flex justify-center gap-2 pt-5 mt-4">
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
        <button
          onClick={() => router.push('/')}
          className="w-full px-4 py-2 text-gray-700 bg-gray-300 rounded-md dark:bg-gray-600 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-400 dark:focus:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectCreationForm;
