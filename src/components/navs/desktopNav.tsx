'use client';
'use client';
import Logo from '@/assets/logo';
import { extensionUrl, navItems } from '@/constants';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import {
  NavBody,
  NavItems,
  Navbar,
  NavbarButton,
} from '../ui/resizable-navbar';

const DesktopNav: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Navbar className="bg-white dark:bg-black ">
      <NavBody>
        <Link href="/" className="z-40">
          <Logo />
        </Link>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            onClick={() => window.open(extensionUrl)}
            variant="primary"
            className="bg-primary text-white border-none text-base"
          >
            Join Us
          </NavbarButton>
        </div>
      </NavBody>
      {children}
    </Navbar>
  );
};

export default DesktopNav;
