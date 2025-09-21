'use client';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {Menu, X, Mountain} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {navigationLinks} from '@/lib/navigation';
import {cn} from '@/lib/utils';

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

  const homeLink = navigationLinks.find(link => link.label === 'Home');
  const categoriesLink = navigationLinks.find(
    link => link.label === 'Categories'
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4">
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {homeLink && (
            <Link
              href={homeLink.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {homeLink.label}
            </Link>
          )}
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" aria-label="Sirius Sports home page">
            <Mountain className="h-8 w-8 text-primary" />
          </Link>
        </div>

        <div className="hidden items-center justify-center gap-8 md:flex">
          {categoriesLink && (
            <Link
              href={categoriesLink.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {categoriesLink.label}
            </Link>
          )}
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
          </nav>
        </div>
      )}
    </header>
  );
}
