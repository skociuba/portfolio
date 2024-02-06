'use client';

import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import {useForm} from 'react-hook-form';

import BackButton from '../components/BackButton';

import styles from './../../app/styles/style';
import Phone from './../../../public/icons/phone.svg';
import LinkedIn from './../../../public/icons/linkedin.svg';
import Target from './../../../public/icons/target.svg';
import Email from './../../../public/icons/at-sign.svg';

type FormData = {
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
};

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
        data,
        process.env.NEXT_PUBLIC_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAlert(true);
          setIsLoading(false);
          reset();
        },
        (error) => {
          console.log(error.text);
          alert('something went wrong');
          setIsLoading(false);
        },
      );
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="m-6 mb-10 flex flex-col justify-center sm:justify-start">
        <div className="fixed inset-0 bg-black/70 text-custom-blue" />
        {showAlert ? (
          <div
            role="alert"
            className="alert alert-success m-0 mb-5 flex transform justify-between">
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
        <div className="z-[30] mb-5">
          <BackButton text="back" href="/" marginTop="15" />
        </div>
      </div>
      <div className="flex transform flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 lg:pb-[26vh]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-2/3 flex-col space-y-4 text-custom-blue lg:w-1/3">
          <label>
            Name:
            <input
              className={`${styles.input}`}
              {...register('user_name', {required: true})}
            />
            {errors.user_name && (
              <p className="text-red-500">This field is required</p>
            )}
          </label>

          <label>
            Email:
            <input
              className={`${styles.input}`}
              {...register('user_email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            {errors.user_email && (
              <p className="text-red-500">{errors.user_email.message}</p>
            )}
          </label>

          <label>
            Topic:
            <input
              className={`${styles.input}`}
              {...register('subject', {required: true})}
            />
            {errors.subject && (
              <p className="text-red-500">This field is required</p>
            )}
          </label>

          <label>
            Content:
            <textarea
              className={`${styles.textArea}`}
              {...register('message', {required: true})}
            />
            {errors.message && (
              <p className="text-red-500">This field is required</p>
            )}
          </label>

          <button
            disabled={isLoading}
            className={`${styles.submitButton}`}
            type="submit">
            {isLoading ? `Sending email...` : `Send`}
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
