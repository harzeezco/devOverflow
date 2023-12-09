/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { QuestionSchema } from '@/lib/validations';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function Question() {
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [],
    },
  });

  function handleTagsInputValue(
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any,
  ) {
    if (e.key === 'Enter') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 15 characters',
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue('tags', [...field.value, tagValue]);
          tagInput.ariaValueNow = '';
          form.clearErrors('tags');
        } else {
          form.trigger();
        }
      }
    }
  }

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid w-full gap-7'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Question Title <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <Input
                  {...field}
                  className='no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border'
                />
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Detailed explanation of your problem{' '}
                <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
                  onInit={(_evt, editor) => (editorRef.current = editor)}
                  initialValue='<p>This is the initial content of the editor.</p>'
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'codesample',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                    ],
                    toolbar:
                      'undo redo | ' +
                      'codesample | bold italic forecolor | alignleft aligncenter |' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style:
                      'body { font-family: Inter; font-size:16px }',
                  }}
                />
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Tags <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <Input
                  onKeyDown={(e) => handleTagsInputValue(e, field)}
                  placeholder='Add tags...'
                  className='no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border'
                />
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

export default Question;
