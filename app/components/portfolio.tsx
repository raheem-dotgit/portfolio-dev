'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'mobile', 'tools'];

  const skills = [
    {
      id: 1,
      title: 'React & Next.js',
      category: 'frontend',
      image: '/images/skills/react-nextjs..jpg',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Node.js & Express',
      category: 'backend',
      image: '/images/skills/node-express.png',
      tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    },
    {
      id: 3,
      title: 'React Native',
      category: 'mobile',
      image: '/images/skills/1_AjesIvV-kkwk6LLvNf1t4A.png',
      tags: ['React Native', 'Expo', 'Mobile UI', 'Cross-platform'],
    },
    {
      id: 4,
      title: 'Flutter Development',
      category: 'mobile',
      image: '/images/skills/flutter.png',
      tags: ['Flutter', 'Dart', 'Material Design', 'iOS/Android'],
    },
    {
      id: 5,
      title: 'UI/UX Design',
      category: 'frontend',
      image: '/images/skills/1714646066098.jpeg',
      tags: ['Figma', 'Responsive Design', 'Prototyping', 'User Testing'],
    },
    {
      id: 6,
      title: 'DevOps & Deployment',
      category: 'tools',
      image:
        '/images/skills/62d0f091fc73b7a5828854b1_022021-Harness-Blogpost-DevOpsGeneric-Header-2400x700-1.png',
      tags: ['Docker', 'CI/CD', 'AWS', 'Vercel'],
    },
  ];

  const filteredSkills = skills.filter((skill) =>
    selectedCategory === 'all' ? true : skill.category === selectedCategory
  );

  return (
    <section className='bg-white py-20 dark:bg-black' id='skills'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='mb-8 text-center text-3xl font-bold tracking-tighter text-zinc-800 dark:text-white sm:text-4xl'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className='mb-12 flex flex-wrap justify-center gap-4'>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className='text-sm capitalize'
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className='overflow-hidden bg-gray-50 shadow-md dark:bg-zinc-900'>
                  <CardContent className='p-0'>
                    <div className='group relative h-48'>
                      <div className='relative h-full w-full'>
                        <Image
                          src={skill.image}
                          alt={skill.title}
                          fill
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          className='object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      </div>
                      <div className='absolute inset-0 flex flex-col items-center justify-center bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-black/70'>
                        <h3 className='mb-4 text-xl font-semibold text-zinc-800 dark:text-white'>
                          {skill.title}
                        </h3>
                        <div className='flex flex-wrap justify-center gap-2'>
                          {skill.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant='secondary'
                              className='bg-gray-200 text-zinc-700 dark:bg-zinc-800 dark:text-gray-300'
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
