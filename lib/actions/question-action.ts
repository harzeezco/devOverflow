'use server';

import { revalidatePath } from 'next/cache';
import { Question } from '@/database/question-model';
import { Tag } from '@/database/tag-model';
import { User } from '@/database/user-model';
import { connectToDatabase } from '../mongoose';
import { CreateQuestionParams, GetQuestionsParams } from '../shared';

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();

    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDatabase();

    const { title, content, author, tags, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagsDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true },
      );

      tagsDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagsDocuments } },
    });

    revalidatePath(path);
  } catch (error) {
    console.log('error');
  }
}
