import Footer from '@/components/footers/footer';
import DesktopNav from '@/components/navs/desktopNav';
import MobileNav from '@/components/navs/mobileNav';
import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className="relative w-full">
      <DesktopNav>
        <MobileNav />
      </DesktopNav>
      <main className={cn('', className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
