'use client';
import { contactContainerVariants } from '@/styles/contact';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const ContactUsContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      className="container px-4 mx-auto py-20"
      initial="hidden"
      animate="visible"
      variants={contactContainerVariants}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </motion.div>
  );
};

export default ContactUsContainer;
