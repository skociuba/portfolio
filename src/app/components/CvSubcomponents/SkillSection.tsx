import React from 'react';
import Image from 'next/image';

import Send from './../../../../public/icons/Send.svg';
interface Item {
  subTitle: string;
  description: Array<string>;
}

interface SectionContent {
  items1: Array<Item>;
  items2: Array<Item>;
  title: string;
}
const Section: React.FC<{content: SectionContent}> = ({content}) => (
  <>
    <div className="flex transform flex-col justify-center text-white">
      <div className="w-full pt-3 text-center">
        <h1 className="py-4 text-3xl font-bold text-custom-blue">
          {content.title}
        </h1>
        <div className="m-5 flex flex-col flex-wrap md:flex-row">
          <div className="pr-5 md:w-1/2 lg:border-r-2 lg:border-custom-blue">
            {content.items1.map((el) => (
              <div className="lg:px-[25%]" key={el.subTitle}>
                <div className="pb-2  font-bold text-custom-blue">
                  {el.subTitle}
                </div>
                {el.description.map((item) => (
                  <div key={item} className="mb-6 flex items-center ">
                    <Image src={Send} alt="Profile" width={20} height={20} />
                    <span className="ml-2">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className=" md:w-1/2">
            {content.items2.map((el) => (
              <div className="lg:px-[25%]" key={el.subTitle}>
                <div className="pb-2  font-bold text-custom-blue">
                  {el.subTitle}
                </div>
                {el.description.map((item) => (
                  <div key={item} className="mb-4 flex items-center ">
                    <Image src={Send} alt="Profile" width={20} height={20} />
                    <span className="ml-2">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Section;
