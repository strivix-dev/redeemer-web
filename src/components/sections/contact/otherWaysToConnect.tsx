'use client';
// import TranslatedText from '@/components/i18n/translatedText';
import ContactItem from '@/components/items/contactItem';
import { contactInfo } from '@/constants';
import { contactItemVariants } from '@/styles/contact';
import { motion } from 'framer-motion';
import { FC } from 'react';

const OtherWaysToConnect: FC = () => {
  return (
    <motion.div className="space-y-8" variants={contactItemVariants}>
      <h2 className="text-1xl font-semibold">
        Other ways to connect
        {/* <TranslatedText namespace="pages">contact.info.title</TranslatedText> */}
      </h2>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <ContactItem key={index} {...info} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default OtherWaysToConnect;
