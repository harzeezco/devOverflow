'use server';

import { connectToDatabase } from '../mongoose';

// eslint-disable-next-line import/prefer-default-export
export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (error) {
    console.log('error');
  }
}
