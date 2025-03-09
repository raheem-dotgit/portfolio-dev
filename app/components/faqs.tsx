'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQs() {
  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer:
        "I specialize in full-stack web and mobile development using React, Next.js, React Native, and Node.js. I'm also experienced with databases like MongoDB and PostgreSQL, and I'm comfortable working with cloud services like AWS and Firebase.",
    },
    {
      question: 'Do you take on freelance projects?',
      answer:
        "Yes, I'm available for freelance projects. I particularly enjoy working on challenging applications that require both frontend and backend expertise. Feel free to contact me with details about your project for a consultation.",
    },
    {
      question: 'What is your development process like?',
      answer:
        'My development process typically involves understanding requirements, creating wireframes/prototypes, developing the application with regular client feedback, thorough testing, and deployment. I emphasize clean code, documentation, and maintainability throughout the process.',
    },
    {
      question: 'How do you handle project communication?',
      answer:
        'I believe in clear and consistent communication. Depending on the project needs, I use tools like Slack, Discord, or email for day-to-day updates, and schedule regular video calls for more detailed discussions. I provide weekly progress reports to keep everyone aligned.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer:
        "Absolutely. I have extensive experience working with existing projects, refactoring code, implementing new features, and fixing bugs. I'm comfortable diving into unfamiliar codebases and quickly getting up to speed with the project architecture.",
    },
    {
      question: 'What is your approach to responsive design?',
      answer:
        'I follow a mobile-first approach to ensure applications work seamlessly across all devices. I use modern CSS techniques like Flexbox, Grid, and responsive units, along with frameworks like Tailwind CSS to create fluid layouts that adapt to any screen size.',
    },
  ];

  return (
    <section className='bg-gray-100 py-20 dark:bg-zinc-900' id='faqs'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mx-auto max-w-3xl text-center'
        >
          <h2 className='mb-4 text-3xl font-bold tracking-tighter text-zinc-800 dark:text-white sm:text-4xl'>
            Frequently Asked Questions
          </h2>
          <p className='mb-12 text-zinc-600 dark:text-gray-400'>
            Here are answers to some common questions about my work and
            services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mx-auto max-w-3xl'
        >
          <Accordion type='single' collapsible className='w-full'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-b border-gray-200 dark:border-zinc-800'
              >
                <AccordionTrigger className='text-left text-zinc-800 dark:text-white'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-zinc-600 dark:text-gray-300'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
