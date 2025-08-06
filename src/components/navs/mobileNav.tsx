'use client';
import Logo from '@/assets/logo';
import { navItems } from '@/constants';
import Link from 'next/link';
import { FC, useState } from 'react';
import {
  MobileNav as MobileNavComponent,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '../ui/resizable-navbar';

const MobileNav: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <MobileNavComponent>
      <MobileNavHeader>
        <Link href="/">
          <Logo />
        </Link>
        <MobileNavToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </MobileNavHeader>

      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        {navItems.map((item, idx) => (
          <Link
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300"
          >
            <span className="block">{item.name}</span>
          </Link>
        ))}
        <div className="flex w-full flex-col gap-4">
          <NavbarButton
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full"
          >
            Login
          </NavbarButton>
          <NavbarButton
            onClick={() => setIsMobileMenuOpen(false)}
            variant="primary"
            className="w-full"
          >
            Book a call
          </NavbarButton>
        </div>
      </MobileNavMenu>
    </MobileNavComponent>
  );
};

export default MobileNav;
