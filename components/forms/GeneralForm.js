// 'use client';

import { validateUserGeneralForm } from '@/utils/formValidations';
import { updateGeneralFormId } from '@/utils/updateGeneralFormAxiosReq';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const GeneralForm = (props) => {
  const [data, setData] = useState({
    name: '',
    message: '',
    placeholderVal: '',
  });
  const backendURL = `http://localhost:3002/generalform/add`;

  const projectId = localStorage.getItem('projectId');
  const generalFormId = localStorage.getItem('generalFormId');

  const handleInputChange = (e, field) => {
    setData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: data.name,
      message: data.message,
      placeholderVal: data.placeholderVal,
    };
    try {
      if (validateUserGeneralForm(formData)) {
        const response = await axios.post(backendURL, formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const dataReceived = response.data;
        persistLogin(dataReceived);

        await updateGeneralFormId(projectId, generalFormId);

        console.log(response.status);
        if (response.status === 201) {
          toast.success('Form Submitted successfully!', {
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
    } catch (error) {
      console.log(error);
    }
  };

  const persistLogin = (dataReceived) => {
    localStorage.setItem('generalFormId', dataReceived._id);
  };

  return (
    <div className="w-full p-8 bg-white rounded-md shadow-md dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="pb-2 text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => handleInputChange(e, 'name')}
            className="px-3 py-2 border border-none rounded-md dark:bg-slate-600 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="pb-2 text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <input
            type="text"
            id="message"
            value={data.message}
            onChange={(e) => handleInputChange(e, 'message')}
            className="px-3 py-2 border border-none rounded-md dark:bg-slate-600 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="placeholderVal"
            className="pb-2 text-gray-700 dark:text-gray-300"
          >
            Placeholder Value
          </label>
          <input
            type="text"
            id="placeholderVal"
            value={data.placeholderVal}
            onChange={(e) => handleInputChange(e, 'placeholderVal')}
            className="px-3 py-2 border border-none rounded-md dark:bg-slate-600 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GeneralForm;
