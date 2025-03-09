'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Mail } from 'lucide-react';

export default function Profile() {
  return (
    <section className='bg-white py-20 dark:bg-zinc-900'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:items-start'>
          <motion.div
            className='w-full lg:w-1/3'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-1'>
              <img
                src='/mee.jpeg'
                alt='Developer Profile'
                className='aspect-square w-full rounded-lg object-cover'
              />
            </div>
          </motion.div>

          <motion.div
            className='w-full lg:w-2/3'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='mb-6 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-4xl'>
              About Me
            </h2>
            <div className='mb-8 space-y-4 text-zinc-600 dark:text-gray-300'>
              <p>
                I'm a passionate Full Stack Developer with over 5 years of
                experience building web and mobile applications. I specialize in
                creating responsive, user-friendly interfaces and robust backend
                systems.
              </p>
              <p>
                My expertise spans across the entire development stack, from
                designing intuitive user experiences to implementing scalable
                server architectures and database solutions.
              </p>
              <p>
                I'm constantly learning new technologies and methodologies to
                stay at the forefront of the rapidly evolving tech landscape. I
                believe in writing clean, maintainable code and following best
                practices.
              </p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <Button className='gap-2'>
                <FileText className='h-4 w-4' />
                Download Resume
              </Button>
              <Button variant='outline' className='gap-2'>
                <Mail className='h-4 w-4' />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
