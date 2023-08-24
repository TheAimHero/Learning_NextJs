'use server';

export default async function getFollowes() {
  try {
    const res = await fetch(
      'https://spotify-api-wrapper.appspot.com/artist/david-kando',
    );
    const data = await res.json();
    const followersCount = data?.artists?.items[0]?.followers?.total;
    if (!followersCount) {
      throw new Error('Error fetching follower count');
    }
    return followersCount;
  } catch (err) {
    console.log(err.message);
  }
}
