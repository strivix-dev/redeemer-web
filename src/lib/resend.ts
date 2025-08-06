'use server';

import ContactEmail from '@/emails/contactUsEmail';
// import { EmailTemplate } from '@/components/email/emailTemplate';
// import { PaymentFailed } from '@/components/email/paymentFailed';
// import PractitionerApprovedEmail from '@/components/email/practitionerApproved/practitionerApproved';
// import WelcomeEmail from '@/components/email/welcomeEmail';
import { companyName } from '@/constants';
import { Resend } from 'resend';
// import { getUserById } from '../users';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const response = await resend.emails.send({
      from: `${companyName} <${process.env.VERIFIED_RESEND_EMAIL_SENDER}>`,
      to: process.env.VERIFIED_RESEND_EMAIL!,
      subject: `New Contact Form Submission: ${data.subject}`,
      text: `You have received a new submission:
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}`,
      react: await ContactEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });
    return { success: true, response };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}
