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
import { useState } from 'react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      form.reset();
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent successfully!',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Button
                type='submit'
                className='w-full dark:bg-white'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {formStatus.type && (
                <div
                  className={`mt-4 p-3 rounded ${
                    formStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
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
