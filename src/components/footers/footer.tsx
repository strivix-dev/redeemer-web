import { FC } from 'react';
import FooterNav from '../navs/footerNav';
import CopyrightFooter from './copyrightFooter';
// import NewsLetter from './newsLetter';

const Footer: FC<{ withoutNewsletter?: boolean }> = ({ withoutNewsletter }) => {
  return (
    <footer className="mt-20 bg-white dark:bg-black ">
      {/* {!withoutNewsletter && <NewsLetter />} */}
      <FooterNav />
      <CopyrightFooter />
    </footer>
  );
};

export default Footer;
