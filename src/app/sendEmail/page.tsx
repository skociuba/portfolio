'use client';

import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';

import Phone from './../../../public/icons/phone.svg';
import LinkedIn from './../../../public/icons/Linkedin.svg';
//import SendEmail from './../../../public/icons/send (1).svg';
import Target from './../../../public/icons/target.svg';
import Email from './../../../public/icons/at-sign.svg';
import Back from './../../../public/icons/arrow-left.svg';

const Main = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);

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
              setShowAlert(true);
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
    <div className="w-full overflow-hidden">
      <div className="m-6 mb-10 flex flex-col justify-center sm:ml-0 sm:justify-start">
        <div className="fixed inset-0 bg-black/70 text-custom-blue" />
        {showAlert ? (
          <div role="alert" className="alert alert-success mx-5 ml-5 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your email was send successfully</span>
            <button onClick={() => setShowAlert(false)} className="btn btn-sm">
              Ok
            </button>
          </div>
        ) : null}
        <Link href="/">
          <button className=" mt-1 flex h-12 w-[100px] transform items-center justify-center rounded border bg-custom-blue text-black hover:bg-inherit hover:text-custom-blue lg:ml-5">
            {' '}
            <Image src={Back} alt="Profile" width={20} height={20} />
            back
          </button>
        </Link>
      </div>
      <div className="flex transform flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:pb-[100vh]">
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
            {errors.user_name && (
              <p className="text-red-500">{errors.user_name}</p>
            )}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="user_email"
              className=" mt-1 block h-10 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />{' '}
            {errors.user_email && (
              <p className="text-red-500">{errors.user_email}</p>
            )}
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="subject"
              className="mt-1 block h-10 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />
          </label>{' '}
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          <label>
            Content:
            <textarea
              name="message"
              className="mt-1 block h-32 w-full  rounded border bg-black pl-1 text-white opacity-80"
            />{' '}
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </label>
          <button
            type="submit"
            className="mt-1  block h-10 rounded  border text-custom-blue hover:bg-custom-blue hover:text-black">
            Send
          </button>
        </form>
        <div className="flex w-full flex-col space-y-4 text-white lg:w-1/3 lg:pl-20">
          <p className="flex items-center p-5">
            {' '}
            <Image src={Phone} alt="Profile" width={20} height={20} />
            <span className="ml-4">
              <a href="tel:+48502424865">+48 502 424 865</a>
            </span>
          </p>
          <p className="flex items-center p-5">
            {' '}
            <Image src={Email} alt="Profile" width={20} height={20} />
            <span className="ml-4">
              <a href="mailto:kociuba.sebastian@gmail.com">
                kociuba.sebastian@gmail.com
              </a>
            </span>
          </p>
          <p className="flex items-center p-5">
            {' '}
            <Image src={Target} alt="Profile" width={20} height={20} />
            <span className="ml-4">Jarosław, Poland</span>
          </p>
          <p className="flex items-center p-5">
            {' '}
            <Image src={LinkedIn} alt="Profile" width={20} height={20} />
            <Link href="https://www.linkedin.com/in/sebastian-kociuba-719743171">
              <span className="ml-4">LinkedIn</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
