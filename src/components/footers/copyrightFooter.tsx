import { Copyright } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
// import TranslatedText from '../i18n/translatedText';

const CopyrightFooter: FC = ({}) => {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="flex items-center">
            <Copyright className="mr-2 h-4" />
            <span className="mr-2">{year}</span>
            All rights reserved.
            {/* <TranslatedText namespace="footer">copyright</TranslatedText> */}
          </p>
          <nav>
            <ul className="flex flex-wrap flex-col justify-center gap-4 md:flex-row md:px-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                  {/* <TranslatedText namespace="footer"> */}
                  {/* privacyPolicy */}
                  {/* </TranslatedText> */}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-foreground transition-colors"
                >
                  Terms Of Service
                  {/* <TranslatedText namespace="footer"> */}
                  {/* termsOfService */}
                  {/* </TranslatedText> */}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/cookies"
                  className="hover:text-foreground transition-colors"
                >
                  <TranslatedText namespace="footer">
                    cookiesSettings
                  </TranslatedText>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
