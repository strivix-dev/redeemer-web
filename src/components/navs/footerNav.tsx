import Logo from '@/assets/logo';
import { navItems, socialLinks } from '@/constants';
import Link from 'next/link';
import { FC } from 'react';
// import TranslatedText from '../i18n/translatedText';

const FooterNav: FC = () => {
  return (
    <div className="w-full py-8 border-y">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            href="/"
            className="text-xl font-semibold text-primary"
            aria-label="footer logo"
          >
            <Logo />
          </Link>

          <nav>
            <ul className="flex flex-col justify-center gap-6 md:flex-row">
              {navItems.map((link) => (
                <li key={link.link} className="text-center">
                  <Link
                    href={link.link}
                    className="text-muted-foreground hover:text-foreground transition-colors font-bold"
                  >
                    {/* <TranslatedText namespace="nav"> */}
                    {link.name}
                    {/* </TranslatedText> */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="__blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
