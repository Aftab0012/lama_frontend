import { backendURL } from './backendURl';

// axiosUtils.js
import axios from 'axios';

export const updateGeneralFormId = async (projectId, generalFormId) => {
  const updateUrl = `${backendURL}/projects/update`;

  try {
    const response = await axios.patch(
      updateUrl,
      {
        projectId,
        generalFormId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage?.getItem('token')}`,
        },
      }
    );

    if (response.status === 201) {
      console.log('GeneralFormId updated successfully');
    }
  } catch (error) {
    console.error('Failed to update GeneralFormId:', error);
    throw error;
  }
};
