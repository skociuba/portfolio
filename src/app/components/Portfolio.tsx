import React from 'react';
import Image from 'next/image';

import {portfolio} from '../constants';

import Send from './../../../public/icons/Send.svg';
const Portfolio: React.FC = () => (
  <section className="mb-5 min-h-[100vh] pt-[10vh]">
    {portfolio.map((item) => (
      <>
        <div className="flex transform flex-col items-center justify-center text-2xl font-bold text-custom-blue">
          {item.name}
        </div>
        <div
          key={item.name}
          className=" mb-10 flex transform flex-col items-center justify-center space-y-4 border-b-2 border-custom-blue pb-10  lg:mx-12 lg:flex-row lg:space-x-4  lg:space-y-0">
          <div className="flex w-full flex-col items-center justify-center space-y-4 text-custom-blue lg:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 w-full rounded-lg bg-custom-blue" />
              <div className="transform transition-all duration-500 hover:translate-x-8 hover:translate-y-8">
                <a href={item.link}>
                  <Image
                    className="rounded-lg"
                    src={item.img}
                    alt="Image 3"
                    width={300}
                    height={300}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" flex w-full flex-col space-y-4 overflow-auto whitespace-normal text-white lg:w-2/3">
            {item.list.map((sentence) => (
              <p key={sentence} className="flex items-center p-5">
                <Image src={Send} alt="Profile" width={20} height={20} />
                <span className="ml-4">{sentence}</span>
              </p>
            ))}
          </div>
        </div>
      </>
    ))}
  </section>
);

export default Portfolio;
