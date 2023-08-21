import './globals.css';
import { Ranga, Roboto_Condensed } from 'next/font/google';

import { GRID_DATA_ITEMS } from './data';
import Link from 'next/link';

const ranga = Ranga({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-ranga-bold',
});
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: 'HOME',
  description: 'The Start To Me',
};

export default function RootLayout(props) {
  const { children } = props;

  const items = GRID_DATA_ITEMS.map((item, index) => {
    const { id, attributes } = item;
    const { href, text, background } = attributes;

    return (
      <Link href={href} key={id}>
        <div
          className={`${background} flex h-[100px] w-[100px] items-end border-[2px] border-solid border-black 
                    sm:h-52 sm:w-52`}
        >
          <span
            className={`mb-2 w-full bg-slate-200/75 text-center font-ranga text-xs hover:bg-slate-700/75 
                      hover:text-white sm:text-lg`}
          >
            {text}
          </span>
        </div>
      </Link>
    );
  });

  return (
    <html lang='en' className={`${ranga.variable} ${robotoCondensed.variable}`}>
      <body
        className={`flex min-h-screen items-center justify-center bg-slate-500 font-roboto`}
      >
        <div className='mx-auto flex w-screen flex-col items-center pb-4 pt-4 sm:w-[1000px]'>
          <div className='flex w-full flex-col items-center justify-between bg-slate-100 pb-5 pt-5 sm:pb-10 sm:pt-10'>
            <div className='mb-5 font-ranga text-2xl underline decoration-blue-400 decoration-4 underline-offset-4 sm:text-4xl'>
              DAVID CANDO MUSIC
            </div>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-2'>
              {items}
            </div>
            <br />
          </div>
          <div className='p-5 text-xl'>{children}</div>
        </div>
      </body>
    </html>
  );
}
