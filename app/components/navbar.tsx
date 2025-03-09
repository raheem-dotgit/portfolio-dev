'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './theme-toggle';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 py-3 shadow backdrop-blur-md dark:bg-zinc-900/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className='container mx-auto flex items-center justify-between px-4'>
        <a href='#' className='text-xl font-bold tracking-tight'>
          <span className='text-blue-500'>Abdul</span>
          <span
            className={
              mounted
                ? resolvedTheme === 'dark'
                  ? 'text-white'
                  : 'text-zinc-800'
                : 'text-zinc-800'
            }
          >
            Raheem
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-8 md:flex'>
          <ul className='flex gap-6'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className='text-sm font-medium text-zinc-700 transition-colors hover:text-blue-500 dark:text-zinc-300 dark:hover:text-blue-400'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className='flex items-center gap-4 md:hidden'>
          <ThemeToggle />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-zinc-700 dark:text-zinc-300'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='container mx-auto overflow-hidden bg-white px-4 dark:bg-zinc-900 md:hidden'
          >
            <ul className='flex flex-col py-4'>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className='border-b border-zinc-100 py-3 dark:border-zinc-800'
                >
                  <a
                    href={link.href}
                    className='block text-zinc-700 transition-colors hover:text-blue-500 dark:text-zinc-300 dark:hover:text-blue-400'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
