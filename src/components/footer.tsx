'use client';

import {Mountain} from 'lucide-react';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-[1200px] px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Block */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Mountain className="h-8 w-8 text-primary" />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              A Pakistan-based apparel manufacturer and exporter, dedicated to
              delivering high-quality hosiery, streetwear, sportswear, and
              workwear to customers worldwide.
            </p>
          </div>

          {/* Collections */}
          <div className="col-span-1">
            <h3 className="mb-4 font-bold uppercase">Collections</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Elite Performance
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Training Gear
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Competition Wear
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Team Uniforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="mb-4 font-bold uppercase">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Innovation
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-primary">
                  Quality Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="mb-4 font-bold uppercase">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Sirius Sports. All rights reserved. | Where
            Performance Meets Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
