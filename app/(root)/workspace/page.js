import MediaCardFeed from '@/components/cards/MediaCardFeed';
import Table from '@/components/table/Table';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:pt-14">
      <div>
        <MediaCardFeed />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default page;
