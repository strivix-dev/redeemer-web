'use client';
import useToast from '@/hooks/useToast';
// import useToastBar from '@/hooks/useToastBar';
import { sendContactFormEmail } from '@/lib/resend';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useTranslations } from 'next-intl';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const useContactUsSchema = () => {
  //   const t = useTranslations('schemas');
  const { showErrorToast, showSuccessToast } = useToast();
  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(8),
        message: z.string().min(10),
      }),
    [],
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      if (values.email && values.name && values.subject && values.message) {
        const result = await sendContactFormEmail({
          name: values?.name,
          email: values?.email,
          subject: values?.subject,
          message: values?.message,
        });

        if (result?.success) {
          showSuccessToast({ description: 'message_send_successfully' });
        } else {
          showErrorToast({ description: result?.error });
        }
      }
    },
    [showErrorToast],
  );

  return { onSubmit, form };
};

export default useContactUsSchema;
