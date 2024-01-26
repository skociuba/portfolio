import React from 'react';
import Link from 'next/link';
const Hero: React.FC = () => (
  <section id="home">
    <div className="custom-img mb-12 flex h-screen items-center justify-center bg-cover bg-fixed bg-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 text-custom-blue" />
      <div className="z-[2] p-5 text-white">
        <h2 className="text-2xl font-bold lg:text-5xl">
          We are what we repeat in our lives.
          <br /> Excellence is not a one-time act, but a habit.
          <p className="pt-5"> Aristotle</p>
        </h2>

        <div className="mt-12 flex flex-col justify-start md:flex-row">
          <Link href="/portfolio">
            <button className="mb-4 mt-1 block h-12 w-[300px] rounded border text-custom-blue hover:bg-custom-blue hover:text-black md:mb-0">
              Portfolio{' '}
            </button>
          </Link>

          <Link href="/sendEmail">
            {' '}
            <button className="ml-0 mt-1 block h-12 w-[300px] rounded border bg-custom-blue text-black hover:bg-inherit hover:text-custom-blue lg:ml-5 ">
              Contact Me{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
