'use client';

import DisplayForm from '@/components/forms/DisplayForm';
import GeneralForm from '@/components/forms/GeneralForm';
import React, { useState } from 'react';
// import GeneralForm from './GeneralForm'; // Import your GeneralForm component
// import DisplayForm from './DisplayForm'; // Import your DisplayForm component

function Page() {
  const [selectedHeader, setSelectedHeader] = useState('General');

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  return (
    <div>
      {/* Headers */}
      <div className="flex gap-4 mb-20">
        <div
          style={{
            cursor: 'pointer',
            padding: '10px',
            backgroundColor: selectedHeader === 'General' ? '#7e22ce' : '#fff',
            color: selectedHeader === 'General' ? '#fff' : '#000',
            borderRadius: '5px',
          }}
          onClick={() => handleHeaderClick('General')}
        >
          General
        </div>
        <div
          style={{
            cursor: 'pointer',
            padding: '10px',
            backgroundColor: selectedHeader === 'Display' ? '#7e22ce' : '#fff',
            color: selectedHeader === 'Display' ? '#fff' : '#000',
            borderRadius: '5px',
          }}
          onClick={() => handleHeaderClick('Display')}
        >
          Display
        </div>
      </div>

      {/* Dynamic Forms */}
      {selectedHeader === 'General' && <GeneralForm />}
      {selectedHeader === 'Display' && <DisplayForm />}
    </div>
  );
}

export default Page;
