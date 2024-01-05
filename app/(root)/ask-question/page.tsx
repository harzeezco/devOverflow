import React from 'react';
import Question from '@/components/question';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/user-action';

async function AskQuestion() {
  // const { userId } = auth();
  const userId = 'clerk123';

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className='h1-bold text-dark100_light900'>Ask a question</h1>

      <div className='mt-9'>
        <Question mongoUserId={JSON.stringify(mongoUser!._id)} />
      </div>
    </div>
  );
}

export default AskQuestion;
