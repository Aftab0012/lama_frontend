import { backendURL } from '@/utils/backendURl';
import { validateDisplayFormInput } from '@/utils/formValidations';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DisplayForm = () => {
  const [primaryColor, setPrimaryColor] = useState('');
  const [isValidHex1, setIsValidHex1] = useState(true);

  const [fontColor, setFontColor] = useState('');
  const [isValidHex2, setIsValidHex2] = useState(true);

  const [fontSize, setFontSize] = useState('');
  const [chatSize, setChatSize] = useState('');

  const [chatIcon, setChatIcon] = useState('');
  const [screenPosition, setScreenPosition] = useState('');

  const [bottonDistance, setBottomDistance] = useState();
  const [horizontalDistance, setHorizontalDistance] = useState();

  const handleColorChange1 = (e) => {
    const enteredColor = e.target.value.trim();
    const isValidHex = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(enteredColor);

    setPrimaryColor(enteredColor);
    setIsValidHex1(isValidHex);
  };

  const handleColorChange2 = (e) => {
    const enteredColor = e.target.value.trim();
    const isValidHex = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/.test(enteredColor);

    setFontColor(enteredColor);
    setIsValidHex2(isValidHex);
  };

  const handleTextChange1 = (e) => {
    setFontSize(e.target.value);
  };

  const handleTextChange2 = (e) => {
    setChatSize(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = {
      primarycolor: primaryColor,
      fontcolor: fontColor,
      fontsize: fontSize,
      chatheight: chatSize,
      chaticonsize: chatIcon,
      screenposition: screenPosition,
      bottomdistance: bottonDistance,
      horizontaldistance: horizontalDistance,
    };

    try {
      if (typeof window !== 'undefined') {
        if (validateDisplayFormInput(formData)) {
          const response = await axios.post(
            `${backendURL}/display-form/add`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          );
          console.log(response.data);
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
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        toast.error('Form submission failed!!', {
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
    <div className="flex flex-col flex-wrap w-full h-full space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <label className="pb-2 text-dark300_light900">
            Enter hex color code
          </label>
          <input
            type="text"
            value={primaryColor}
            onChange={handleColorChange1}
            placeholder="Enter hex color code 1"
            className="h-12 px-4 border border-none rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800"
          />
        </div>

        <div
          style={{
            width: '50px',
            height: '50px',
            border: '1px solid #ccc',
            backgroundColor: isValidHex1 ? primaryColor : '',
            transition: 'background-color 0.3s ease-in-out',
          }}
        ></div>
        {!isValidHex1 && (
          <p className="pl-5 font-light text-red-700">Invalid hex color code</p>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <label className="pb-2 text-dark300_light900">
            Enter primary color.
          </label>
          <input
            type="text"
            value={fontColor}
            onChange={handleColorChange2}
            placeholder="Enter hex color code 2"
            className="h-12 px-4 border-none rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800"
          />
        </div>

        <div
          style={{
            width: '50px',
            height: '50px',
            border: '1px solid #ccc',
            backgroundColor: isValidHex2 ? fontColor : '',
            transition: 'background-color 0.3s ease-in-out',
          }}
        ></div>
        {!isValidHex2 && (
          <p className="pl-5 font-light text-red-700">Invalid hex color code</p>
        )}
      </div>

      <div className="flex space-x-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="pb-2 text-dark300_light900">
              Enter font size(px).
            </label>
            <input
              type="text"
              value={fontSize}
              onChange={handleTextChange1}
              placeholder="Enter text value 1"
              className="px-4 py-3 border-none rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800"
            />
          </div>

          <p>{fontSize}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="pb-2 text-dark300_light900">
              Enter chat height(px).
            </label>
            <input
              type="text"
              value={chatSize}
              onChange={handleTextChange2}
              placeholder="Enter text value 2"
              className="px-4 py-3 border-none rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800"
            />
          </div>

          <p>{chatSize}</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="pb-2 text-dark300_light900">
              Enter chat icon size.
            </label>
            <select
              value={chatIcon}
              onChange={(e) => setChatIcon(e.target.value)}
              className="px-4 py-2 border-none rounded text-dark400_light700 focus:outline-none focus:border-purple-500 dark:bg-gray-800"
            >
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>

          <p>Selected Option: {chatIcon}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="pb-2 text-dark300_light900">
              Position on screen.
            </label>
            <select
              value={screenPosition}
              onChange={(e) => setScreenPosition(e.target.value)}
              className="px-4 py-2 border-none rounded text-dark400_light700 focus:outline-none focus:border-purple-500 dark:bg-gray-800"
            >
              <option value="Top right">top right</option>
              <option value="Top left">top left</option>
              <option value="Bottom right">bottom right</option>
              <option value="Bottom left">bottom left</option>
            </select>
          </div>
          <p>Selected Option: {screenPosition}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex flex-col">
          <label className="pb-2 text-dark300_light900">
            Distance from bottom.
          </label>
          <input
            type="number"
            value={bottonDistance}
            onChange={(e) => setBottomDistance(e.target.value)}
            placeholder="Enter numeric value 1"
            className="p-2 border-none rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800"
          />
        </div>
        <p>{bottonDistance}</p>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex flex-col">
          <label className="pb-2 text-dark300_light900">
            Horizontal Distance.
          </label>
          <input
            type="number"
            value={horizontalDistance}
            onChange={(e) => setHorizontalDistance(e.target.value)}
            placeholder="Enter numeric value 2"
            className="p-2 border-none rounded focus:outline-none focus:border-purple-500 dark:bg-gray-800"
          />
        </div>
        <p>{horizontalDistance}</p>
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DisplayForm;
