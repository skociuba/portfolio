'use client';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';

import Send from './../../../public/icons/Send.svg';
const Main = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'service_4z832gj',
          'template_tdn1169',
          form.current,
          '6KKLRD4Gqko0hKQ90',
        )
        .then(
          (result) => {
            console.log(result.text);
            if (form.current) {
              form.current.reset();
              alert('Message was sended');
            }
          },
          (error) => {
            console.log(error.text);
            alert('something went wrong');
          },
        );
    }
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="m-6 mb-10 flex justify-center sm:ml-0 sm:justify-start">
          <div className="fixed inset-0 bg-black/70 text-custom-blue" />
          <Link href="/">
            <button className="mt-1 block h-12 w-[300px] transform rounded border bg-custom-blue text-black hover:bg-inherit hover:text-custom-blue lg:ml-5">
              Home
            </button>
          </Link>
        </div>
      </div>
      <div className="flex transform flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex w-2/3 flex-col space-y-4 text-custom-blue lg:w-1/3">
          <label>
            Name:
            <input
              type="text"
              name="user_name"
              className=" mt-1 block h-10 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="user_email"
              className=" mt-1 block h-10 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="subject"
              className="mt-1 block h-10 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />
          </label>
          <label>
            Content:
            <textarea
              name="message"
              className="mt-1 block h-32 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />
          </label>
          <input
            type="submit"
            value="Send"
            className="mt-1  block h-10 rounded  border text-custom-blue hover:bg-custom-blue hover:text-black"
          />
        </form>
        <div className="flex w-full flex-col space-y-4 text-white lg:w-1/3 lg:pl-20">
          <p className="flex items-center p-5">
            {' '}
            <Image src={Send} alt="Profile" width={20} height={20} />
            <span className="ml-4">502424865</span>
          </p>
          <p className="flex items-center p-5">
            {' '}
            <Image src={Send} alt="Profile" width={20} height={20} />
            <span className="ml-4">kociuba.sebastian@gmail.com</span>
          </p>
          <p className="flex items-center p-5">
            {' '}
            <Image src={Send} alt="Profile" width={20} height={20} />
            <span className="ml-4">Jarosław, Poland</span>
          </p>
          <p className="flex items-center p-5">
            {' '}
            <Image src={Send} alt="Profile" width={20} height={20} />
            <Link href="https://www.linkedin.com/in/sebastian-kociuba-719743171">
              <span className="ml-4">LinkedIn</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
