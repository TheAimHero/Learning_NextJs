'use client';

import React, { useState, useTransition } from 'react';
import postContact from './postContact';

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isPending, startTransition] = useTransition(null);
  const [displayMessage, setDisplayMessage] = useState(null);

  function handleSubmit(e) {
    startTransition(() => {
      e.preventDefault();
      postContact({ name, email }).catch(error => {
        setDisplayMessage(error.message);
      });
    });
  }

  function handleReset() {
    setEmail('');
    setName('');
    setDisplayMessage(null);
  }

  return (
    <form
      className='m-3 flex flex-col items-center justify-between gap-2'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-row gap-2'>
        <label htmlFor='name'>Name</label>
        <input
          className='rounded-lg p-[3px]'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          id='name'
          required
        />
      </div>
      <div className='flex flex-row gap-2'>
        <label htmlFor='email'>Email</label>
        <input
          className='rounded-lg p-[3px]'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          id='email'
          required
        />
      </div>
      <div className='flex flex-row gap-2'>
        <button
          type='submit'
          disabled={isPending}
          className={`mt-[4px] h-[36px] w-[130px] rounded-lg bg-blue-700 text-center text-white disabled:bg-blue-400 disabled:text-slate-500`}
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          className={`mt-[4px] h-[36px] w-[130px] rounded-lg bg-blue-700 text-center text-white disabled:bg-slate-400 disabled:text-slate-500`}
          type='reset'
        >
          Reset
        </button>
      </div>
      {displayMessage && <span className='text-red-500'>{displayMessage}</span>}
    </form>
  );
}
