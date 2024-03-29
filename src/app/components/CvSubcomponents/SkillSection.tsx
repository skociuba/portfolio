import React from 'react';
import Image from 'next/image';

import Check from './../../../../public/icons/check-square.svg';
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
    <div className="mt:0 mx-10 flex transform flex-col justify-center border-b-2 border-custom-blue pb-2 text-white lg:mx-2 lg:mt-8">
      <div className="mt-2 w-full">
        <h1 className="ml-5 pb-3 text-3xl font-bold text-custom-blue lg:px-[12%]">
          {content.title}
        </h1>
        <div className="m-5 flex flex-col flex-wrap text-center md:flex-row">
          <div className="pr-5 md:w-1/2 lg:border-r-2 lg:border-custom-blue">
            {content.items1.map((el) => (
              <div className="lg:px-[25%]" key={el.subTitle}>
                <div className="pb-2  font-bold text-custom-blue">
                  {el.subTitle}
                </div>
                {el.description.map((item) => (
                  <div key={item} className="mb-5 flex items-center ">
                    <Image src={Check} alt="Profile" width={20} height={20} />
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
                    <Image src={Check} alt="Profile" width={20} height={20} />
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
