import './globals.css';
import { Ranga, Roboto_Condensed } from 'next/font/google';

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
  return (
    <html lang='en' className={`${ranga.variable} ${robotoCondensed.variable}`}>
      <body
        className={`flex min-h-screen items-center justify-center bg-slate-500 font-roboto`}
      >
        {children}
      </body>
    </html>
  );
}
