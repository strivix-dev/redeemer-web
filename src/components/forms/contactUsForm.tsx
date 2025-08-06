'use client';
import { Form } from '@/components/ui/form';
import useContactUsSchema from '@/schemas/useContactUsSchema';
import { itemVariants } from '@/styles/home';
import { motion } from 'framer-motion';
// import { useTranslations } from 'next-intl';
import { FC } from 'react';
// import TranslatedText from '../i18n/translatedText';
import GenericFormItem from '../items/genericFormItem';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const ContactUsForm: FC = ({}) => {
  // const t = useTranslations('labels');
  const { form, onSubmit } = useContactUsSchema();

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        variants={itemVariants}
      >
        <GenericFormItem
          form={form}
          type="text"
          name="name"
          placeholder="Full Name"
        />
        <GenericFormItem
          form={form}
          type="email"
          name="email"
          placeholder="Email"
        />
        <GenericFormItem
          form={form}
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <GenericFormItem
          form={form}
          name="message"
          render={(field) => <Textarea {...field} placeholder="Message" />}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Send Message
          {/* <TranslatedText namespace="cta">send_message</TranslatedText> */}
        </Button>
      </motion.form>
    </Form>
  );
};

export default ContactUsForm;
