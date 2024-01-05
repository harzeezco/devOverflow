'use server';

import { User } from '@/database/user-model';
import { connectToDatabase } from '../mongoose';

export async function getUserById(params: {
  userId: string;
}): Promise<typeof User | null> {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
