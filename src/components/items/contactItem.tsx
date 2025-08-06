import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';
import { FC, ForwardRefExoticComponent, RefAttributes } from 'react';
// import TranslatedText from '../i18n/translatedText';

interface ContactItemProps {
  index: number;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  text: string;
}

const ContactItem: FC<ContactItemProps> = ({ index, Icon, text }) => {
  return (
    <motion.div
      className="flex items-center space-x-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-muted-foreground">
        {text}
        {/* <TranslatedText namespace="pages">{`contact.${text}`}</TranslatedText> */}
      </span>
    </motion.div>
  );
};

export default ContactItem;
