import ContactUsContainer from '@/components/containers/contactUsContainer';
import ContactUsForm from '@/components/forms/contactUsForm';
import ContactHeading from '@/components/sections/contact/heading';
import OtherWaysToConnect from '@/components/sections/contact/otherWaysToConnect';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <main className="">
      <ContactUsContainer>
        <ContactHeading />
        <div className="grid md:grid-cols-2 gap-12">
          <ContactUsForm />
          <OtherWaysToConnect />
        </div>
      </ContactUsContainer>
    </main>
  );
};

export default ContactPage;
