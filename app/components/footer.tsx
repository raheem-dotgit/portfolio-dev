import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='border-t border-gray-200 bg-white py-8 dark:border-zinc-800 dark:bg-black'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='text-sm text-zinc-600 dark:text-gray-400'>
            © {new Date().getFullYear()} Abdul Raheem. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <a
              href='https://github.com/raheem-dotgit'
              target='_blank'
              className='text-zinc-500 transition-colors hover:text-blue-500 dark:hover:text-blue-400'
              aria-label='GitHub'
            >
              <Github size={20} />
            </a>

            <a
              href='https://www.linkedin.com/in/ab-raheem'
              target='_blank'
              className='text-zinc-500 transition-colors hover:text-blue-500 dark:hover:text-blue-400'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
