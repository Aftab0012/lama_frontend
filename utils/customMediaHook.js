// THIS CAN BE USED LATER TO MAKE THINGS SCALABLE

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useMediaData = () => {
//   const [data, setData] = useState([]);
//   const backendURL = 'http://localhost:3002/media-uploads';

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(backendURL, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setData(response.data.mediaUploads);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return { data, fetchData };
// };

// export default useMediaData;
