'use server';

export default async function postContact({ name, email }) {
  try {
    const apiKey = process.env.MAILJST_API_KEY;
    const secret = process.env.MAILJST_API_KEY_SECRET;
    const url = 'https://api.mailjet.com/v3/REST/contact';
    const body = JSON.stringify({ name, email, isExcludedFromCampaigns: true });
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(apiKey + ':' + secret).toString(
        'base64',
      )}`,
    };
    const response = await fetch(url, { method: 'POST', headers, body });

    const data = await response.json();
    if (data.ErrorMessage.includes('already exists')) {
      throw new Error('Email already exists');
    } else if (data.ErrorMessage.includes('already exists')) {
      throw new Error('Email already exists');
    }

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
