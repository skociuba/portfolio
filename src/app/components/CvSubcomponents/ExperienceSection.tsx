import React from 'react';
import Image from 'next/image';

import Check from './../../../../public/icons/check-square.svg';

interface InternalItem {
  name: string;
  date: string;
}

interface Item {
  subTitle: string;
  description: Array<InternalItem>;
}

interface SectionContent {
  items: Array<Item>;
  title: string;
}
const ExperienceSection: React.FC<{content: SectionContent}> = ({content}) => (
  <>
    <div className="flex transform flex-col justify-center text-white ">
      <div className="mb-5 w-full pt-5 ">
        <h1 className="ml-5 pb-8 pt-5 text-3xl font-bold text-custom-blue lg:px-20">
          {content.title}
        </h1>
        <div className="m-5 flex flex-col flex-wrap text-center md:flex-row">
          <div>
            {content.items.map((el) => (
              <div className="pb-8 lg:px-20" key={el.subTitle}>
                <div className="pb-2  font-bold text-custom-blue">
                  {el.subTitle}
                </div>
                {el.description.map((item) => (
                  <div key={item.name} className="mb-6 flex items-center ">
                    <Image src={Check} alt="Profile" width={20} height={20} />
                    <span className="ml-2">
                      {`${item.name}   ${item.date}`}
                    </span>
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

export default ExperienceSection;
