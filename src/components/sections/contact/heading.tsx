'use client';
// import TranslatedText from '@/components/i18n/translatedText';
import { contactItemVariants } from '@/styles/contact';
import { motion } from 'framer-motion';
import { FC } from 'react';

const ContactHeading: FC = () => {
  return (
    <motion.div className="text-center mb-12" variants={contactItemVariants}>
      <h1 className="text-4xl font-bold mb-4">
        Get In Touch
        {/* <TranslatedText namespace="pages">contact.title</TranslatedText> */}
      </h1>
      <p className="text-xl text-primary mb-2">
        We're Here to Help
        {/* <TranslatedText namespace="pages">contact.subtitle</TranslatedText> */}
      </p>
      <p className="text-muted-foreground">
        Have questions or need support? Our team is here to assist you on your
        journey.
        {/* <TranslatedText namespace="pages">contact.description</TranslatedText> */}
      </p>
    </motion.div>
  );
};

export default ContactHeading;
