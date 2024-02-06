import React from 'react';

import BackButton from '../components/BackButton';
import Portfolio from '../components/Portfolio';
const page: React.FC = () => (
  <div className="w-full">
    <div className="m-6 mb-10 flex sm:ml-0 sm:justify-start">
      <div className="fixed inset-0 bg-black/70 text-custom-blue" />
      <div className="z-[30] ">
        <BackButton text="back" href="/" />
      </div>
    </div>
    <Portfolio />
  </div>
);

export default page;
