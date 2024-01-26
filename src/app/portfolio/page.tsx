import React from 'react';
import Link from 'next/link';

import Portfolio from '../components/Portfolio';
const page: React.FC = () => (
  <div className="w-full overflow-hidden">
    <div className="m-6 mb-10 flex justify-center sm:ml-0 sm:justify-start">
      <div className="fixed inset-0 bg-black/70 text-custom-blue" />
      <Link href="/">
        <button className="mt-1 block h-12 w-[300px] transform rounded border bg-custom-blue text-black hover:bg-inherit hover:text-custom-blue lg:ml-5">
          Home
        </button>
      </Link>
    </div>

    <Portfolio />
  </div>
);

export default page;
