import React, { Fragment } from 'react';

import { PREMISE, QUESTIONS } from './data';

export default function Page() {
  const questionsArr = QUESTIONS.map(q => {
    const { id: questionId, question, answers } = q;

    return (
      <fieldset key={questionId} className='mt-5'>
        <legend>
          {questionId}.){question}
        </legend>
        {answers.map(ans => {
          const { id: answerId, answer, type } = ans;
          return (
            <div key={answerId}>
              <input
                id={answerId}
                type='radio'
                name={questionId}
                value={type}
                required
              />
              <label htmlFor={answerId}>
                {'\t'}
                {answer}
              </label>
            </div>
          );
        })}
      </fieldset>
    );
  });

  return (
    <Fragment>
      {PREMISE}
      <form action='/quiz/result'>
        {questionsArr}
        <div className='flex justify-between'>
          <button
            type='submit'
            className={`mx-auto mt-[4px] h-[36px] w-[130px] rounded-lg bg-blue-700 text-center text-white 
                        disabled:bg-blue-400 disabled:text-slate-500`}
          >
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
}
