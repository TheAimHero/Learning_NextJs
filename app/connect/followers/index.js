'use client';
// https://spotify-api-wrapper.appspot.com/artist/david-kando
import { calculateOverrideValues } from 'next/dist/server/font-utils';
import React, { useState, useEffect } from 'react';
import getFollowes from './get-followers';

export default function Followers() {
  const [followersCount, setFollowersCount] = useState(undefined);

  useEffect(() => {
    getFollowes().then(followers => setFollowersCount(followers));
  }, []);

  return (
    <div className='ml-[15px] mt-[5px] sm:ml-[20px]'>
      Follower Progrress: {followersCount ? followersCount : '?'}/100
    </div>
  );
}
