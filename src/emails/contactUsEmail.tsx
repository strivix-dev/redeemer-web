import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from '@react-email/components';
import { FC } from 'react';
import { Footer } from './emailFooter';
import { Header } from './emailHeader';

export interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const styles = {
  body: {
    backgroundColor: '#f3f4f6',
    fontFamily: 'sans-serif',
  },
  container: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '4px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    margin: '32px auto',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '16px',
  },
  text: {
    color: '#4b5563',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '24px',
  },
  section: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '4px',
    border: '1px solid #e5e7eb',
    marginBottom: '24px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  hr: {
    borderTop: '1px solid #e5e7eb',
    margin: '24px 0',
  },
  footer: {
    fontSize: '14px',
    color: '#6b7280',
  },
};

const ContactEmail: FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Header />

        <Container style={styles.container}>
          <Heading style={styles.heading}>New Contact Form Submission</Heading>

          <Text style={styles.text}>
            You have received a new message from your website contact form.
          </Text>

          <Section style={styles.section}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.label}>Subject:</Text>
            <Text style={styles.text}>{subject}</Text>
            <Hr style={styles.hr} />
            <Text style={styles.label}>Message:</Text>
            <Text style={{ ...styles.text, fontStyle: 'italic' }}>
              "{message}"
            </Text>
          </Section>

          <Text style={styles.text}>
            Please respond to this inquiry as soon as possible.
          </Text>

          <Hr style={styles.hr} />

          <Text style={styles.footer}>
            This email was sent from your website contact form. If you did not
            expect this message, please contact your administrator.
          </Text>
        </Container>

        <Footer />
      </Body>
    </Html>
  );
};

export default ContactEmail;
