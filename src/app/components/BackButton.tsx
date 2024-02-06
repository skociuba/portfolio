'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BackBlack from './../../../public/icons/arrow-left-black.svg';
import BackBlue from './../../../public/icons/arrow-left-blue.svg';

interface BackButtonProps {
  text: string;
  href: string;
  marginTop?: string;
}

const BackButton: React.FC<BackButtonProps> = ({text, href, marginTop}) => {
  const [hover, setHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link href={href}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`fixed top-${
          marginTop || '5'
        } mt-1 flex h-12 transform items-center justify-center rounded border bg-custom-blue text-black hover:bg-inherit hover:text-custom-blue lg:ml-5 ${
          scrollPosition > 5 ? 'w-12 rounded-full' : 'w-24'
        }`}>
        <Image
          src={hover ? BackBlue : BackBlack}
          alt="Profile"
          width={20}
          height={20}
        />
        {scrollPosition > 5 ? null : text}
      </button>
    </Link>
  );
};
export default BackButton;
