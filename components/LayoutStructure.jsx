import React from 'react';
export default function LayoutStructure(props) {
  const {
    children,
    title,
    background = 'bg-gradient-to-b from-slate-100 to-pink-100',
  } = props;

  return (
    <div
      className={`my-5 mb-5 flex flex-col items-center justify-center bg-cover bg-no-repeat p-5 text-xs sm:p-10 sm:text-xl ${background}`}
    >
      <span className='title'>{title}</span>
      <div>{children}</div>
    </div>
  );
}
