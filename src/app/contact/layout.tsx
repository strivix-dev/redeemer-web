import { Metadata, NextPage } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: 'Contact Davva.com Spiritual Support',
  description:
    'Get in touch with Davva.com customer support for help with bookings, practitioner inquiries, or platform questions.',
  alternates: {
    canonical: `${process.env.BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Spiritual Guidance Platform | Davva.com',
    description:
      'Reach our support team for assistance with spiritual consultations and platform features',
  },
};

const ContactPageLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default ContactPageLayout;
