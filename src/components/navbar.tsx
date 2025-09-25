'use client';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {navigationLinks} from '@/lib/navigation';
import {cn} from '@/lib/utils';
import {ThemeToggle} from './theme-toggle';
import { SiriusLogo } from './sirius-logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4">
        <Link
          href="/"
          className="relative z-[101] flex items-center gap-2 text-foreground transition-opacity hover:opacity-80"
          aria-label="Sirius Sports home page"
        >
          <SiriusLogo />
          <span
            className="text-xl font-bold text-foreground"
          >
            Sirius Sports
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navigationLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-background md:hidden">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navigationLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full text-center text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}
