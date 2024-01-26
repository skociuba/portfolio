import React from 'react';
import Image from 'next/image';

interface SummaryContent {
  title: string;
  description: string;
  src: string;
}

const SummaryComponent: React.FC<{content: SummaryContent}> = ({content}) => (
  <>
    <div className="flex transform flex-col justify-center text-white lg:min-h-[82vh]">
      <div className="mb-5 w-full pt-5 text-center">
        <h1 className="pb-8 pt-5 text-3xl font-bold text-custom-blue">
          {content.title}
        </h1>
        <div className="my-20 flex flex-col flex-wrap md:flex-row lg:mx-20">
          <div className="pr-5 md:w-2/3 lg:border-r-2 lg:border-custom-blue lg:text-2xl">
            {content.description}
          </div>
          <div className="flex w-full  flex-col items-center justify-center md:w-1/3">
            <Image src={content.src} alt="Profile" width={200} height={350} />
          </div>
        </div>
      </div>
    </div>
  </>
);
export default SummaryComponent;
