// Table.jsx
'use client';

import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import TableData from './TableData';

const Table = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const [reducerVal, forceUpdate] = useReducer((x) => x + 1, 0);
  const backendURL = `https://lamarefbackend.onrender.com/media-uploads`;

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);

    const fetchData = async () => {
      try {
        const response = await axios.get(backendURL, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        setData(response.data.mediaUploads);
        forceUpdate();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData inside the useEffect

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducerVal]); // Empty dependency array to run only once

  return (
    <>
      <TableData data={data} backendURL={backendURL} />
    </>
  );
};

export default Table;
