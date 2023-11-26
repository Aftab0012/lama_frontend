'use client';

import { validateForm } from '@/utils/formValidations';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MediaUploadForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [token, setToken] = useState('');
  const backendURL = `https://lamarefbackend.onrender.com/media-uploads/add`;

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      description: description,
    };
    if (validateForm(data)) {
      try {
        const response = await axios.post(backendURL, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const dataReceived = response.data;
        console.log(dataReceived);
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
          onClose();
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

  return (
    <div className="fixed w-full max-w-md p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md top-1/2 left-1/2 dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <label className="block text-sm font-medium text-gray-700 dark:text-white">
          Content:
        </label>
        <textarea
          name="content"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:text-white dark:bg-gray-700"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <button
        onClick={onClose}
        className="w-full px-4 py-2 mt-4 text-gray-700 bg-gray-300 rounded-md dark:bg-gray-600 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-400 dark:focus:bg-gray-700"
      >
        Close
      </button>
    </div>
  );
};

export default MediaUploadForm;
