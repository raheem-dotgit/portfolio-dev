'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section
      className='relative overflow-hidden bg-gray-100 py-20 dark:bg-zinc-900'
      id='contact'
    >
      <div className='container relative z-10 mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto max-w-2xl text-center'
        >
          <h2 className='mb-4 text-3xl font-bold tracking-tighter text-zinc-800 dark:text-white sm:text-4xl'>
            Get in Touch
          </h2>
          <p className='mb-8 text-zinc-600 dark:text-gray-400'>
            Interested in working together or have a project in mind? Let's
            build something amazing together.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mx-auto max-w-md'
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Your name'
                        {...field}
                        className='bg-background'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='your@email.com'
                        {...field}
                        className='bg-background'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Tell me about your project...'
                        className='min-h-[120px] bg-background'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full dark:bg-white  '>
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
      <div className='absolute inset-0 z-0 opacity-30'>
        <svg
          className='h-full w-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <line
              key={i}
              x1={i * 2}
              y1='0'
              x2={i * 2}
              y2='100'
              stroke='currentColor'
              strokeWidth='0.1'
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
