'use client';

import React, { useState } from 'react';
import MediaCards from './MediaCards';
import { mediaTypes } from '@/constants';
import MediaUploadForm from '../forms/MediaUploadForm';

const MediaCardFeed = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="flex-row flex-wrap gap-3 px-4 pb-4 flex-center">
        {mediaTypes.map((media) => (
          <div key={media.action} className="cursor-pointer" onClick={openForm}>
            <MediaCards
              img={media.imgURL}
              action={media.action}
              description={media.description}
            />
          </div>
        ))}
      </div>

      {showForm && <MediaUploadForm onClose={closeForm} />}
    </>
  );
};

export default MediaCardFeed;
