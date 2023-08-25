import React from 'react';

import LayoutStructure from '@/components/LayoutStructure';

export const metadata = { title: 'Connect with David Kando' };

export default function Layout(props) {
  const { children } = props;

  return (
    <LayoutStructure
      background='bg-gradient-to-b from-slate-100 to-pink-100'
      title={"Let's connect"}
    >
      {children}
    </LayoutStructure>
  );
}
