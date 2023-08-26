import Image from 'next/image';
import React from 'react';

export default function PlayRow(props) {
  const { href, iconImage, title } = props;

  return (
    <a
      href={href}
      target='_blank'
      className='flex flex-row w-full font-medium text-base justify-center border-t-[2px] border-slate-200 p-3 hover:bg-sky-100'
    >
      <span className='mr-1'>Play On</span>
      <span className='relative h-[24px] w-[80px]'>
        <Image src={iconImage} alt={`${title} Icon`} fill sizes='80px' />
      </span>
    </a>
  );
}
