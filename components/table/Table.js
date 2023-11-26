'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableData from './TableData';

const Table = () => {
  const [data, setData] = useState([]);
  const backendURL = `http://localhost:3002/media-uploads`;

  const fetchData = async () => {
    try {
      const response = await axios.get(backendURL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setData(response.data.mediaUploads);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      <TableData data={data} fetchData={fetchData} backendURL={backendURL} />
    </>
  );
};

export default Table;
