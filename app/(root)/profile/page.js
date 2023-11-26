'use client';

import { backendURL } from '@/utils/backendURl';
import { validateUserUpdateName } from '@/utils/formValidations';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../../../styles/customStyles.css';

const page = () => {
  const [name, setName] = useState('');
  console.log(name);
  const username = localStorage?.getItem('username');

  const updateName = async () => {
    let userId = localStorage?.getItem('id');
    console.log(userId);
    try {
      const data = {
        name: name,
      };
      if (validateUserUpdateName(data)) {
        const response = await axios.patch(
          `${backendURL}/auth/users/${userId}`,
          {
            username: name,
          }
        );
        const data = response.data;
        if (response.status === 200) {
          toast.success(
            'Name updated successfully!! you will see your new name the next time you login',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            }
          );
        }
        console.log(data);
      }
    } catch (error) {
      console.log('failed user name updation');
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

  return (
    <div className="">
      <div className="flex items-center">
        <Image
          src={'/assets/images/nouser.png'}
          className="mb-10"
          width={100}
          height={100}
        />
        <div className="pb-10 pl-6">
          <p className="capitalize max-sm:text-md sm:h2-bold text-dark200_light800">
            {username}
          </p>
          <p className="pt-1 text-sm text-light400_light500">@{username}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div>
          <label className="font-mono text-gray-600 h3-bold text-dark400_light800">
            Enter your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full px-4 py-2 mt-4 border border-none rounded-md shadow-md focus:outline-none focus:border-blue-500 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={updateName}
            className="px-4 py-2 mt-4 rounded-lg background-light800_dark400 text-dark400_light800 shadow-light100_dark100 btn-primary"
          >
            Update name
          </button>
        </div>
        <div>
          <label className="font-mono text-gray-600 h3-bold text-dark400_light800">
            Enter your email
          </label>
          <input
            type="text"
            placeholder="Not funtional its for showcase only."
            className="w-full px-4 py-2 mt-4 border border-none rounded-md shadow-md focus:outline-none focus:border-blue-500 dark:border-gray-500 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      <div className="h1-bold text-[#7e22ce] pt-12">Subscriptions</div>
      <div className="w-full mt-4 text-white rounded-xl max-md:hidden gap-28 flex-center bg-blue h-14 bg-gradient-to-r from-blue-800 to-indigo-900">
        <p className="flex items-center gap-2 pr-2 max-lg:line-clamp-1">
          You are currently on the
          <p className="underline h3-bold"> Ques AI Basic Plan!</p>
        </p>
        <button className="px-4 py-2 font-semibold rounded-xl background-light900_dark300 text-dark100_light900">
          Upgrade
        </button>
      </div>
      <div className="bg-gradient-to-r gap-20 flex-center rounded-xl px-2 from-blue-800 to-indigo-900 md:hidden w-full h-[100px]">
        <p className="flex items-center gap-2 pr-2">
          <p className="text-white underline line-clamp-1 h3-bold">
            Ques AI Basic Plan!
          </p>
        </p>
        <button className="px-4 py-2 font-semibold rounded-xl background-light900_dark300 text-dark100_light900">
          Upgrade
        </button>
      </div>
      <div className="pt-4 font-semibold text-red-700 underline">
        Cancel Subscription
      </div>
    </div>
  );
};

export default page;
