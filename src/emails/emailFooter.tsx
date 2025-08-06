import { Column, Img, Link, Row, Section, Text } from '@react-email/components';

interface FooterProps {
  baseUrl?: string;
}

const styles = {
  footer: {
    backgroundColor: 'hsl(248,49%,56%)',
    padding: '24px',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 16px',
  },
  logo: {
    maxWidth: '120px',
    marginBottom: '16px',
  },
  text: {
    color: 'white',
    fontSize: '14px',
    lineHeight: '20px',
  },
  heading: {
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  link: {
    color: 'white',
    fontSize: '14px',
    textDecoration: 'none',
    marginBottom: '4px',
  },
  socialIcon: {
    marginRight: '8px',
  },
  copyright: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    marginTop: '32px',
    paddingTop: '16px',
    textAlign: 'center' as const,
    fontSize: '12px',
    color: 'white',
  },
};

export const Footer = ({ baseUrl = 'https://example.com' }: FooterProps) => {
  return (
    <Section style={styles.footer}>
      <Row style={styles.container}>
        <Column style={{ width: '33%', textAlign: 'left' as const }}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="120"
            height="40"
            alt="Company Logo"
            style={styles.logo}
          />
          <Text style={styles.text}>
            © {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </Text>
        </Column>
        <Column style={{ width: '33%' }}>
          <Text style={styles.heading}>Connect With Us</Text>
          <Row>
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <Column key={social} style={styles.socialIcon}>
                <Link href={`https://${social}.com`}>
                  <Img
                    src={`${baseUrl}/static/${social}.png`}
                    width="24"
                    height="24"
                    alt={social}
                  />
                </Link>
              </Column>
            ))}
          </Row>
          <Text style={{ ...styles.text, marginTop: '16px' }}>
            Questions? Contact us at{' '}
            <Link href="mailto:support@example.com" style={{ color: 'white' }}>
              support@example.com
            </Link>
          </Text>
        </Column>
      </Row>
      <Column style={{ width: '33%' }}>
        <Text style={styles.heading}>Quick Links</Text>
        {['Home', 'About', 'Contact', 'Booking', 'Terms', 'Privacy'].map(
          (item) => (
            <Link
              key={item}
              href={`${baseUrl}/${item.toLowerCase()}`}
              style={styles.link}
            >
              {item}
            </Link>
          ),
        )}
      </Column>
      <Text style={styles.copyright}>
        <Link
          href={`${baseUrl}/terms`}
          style={{ color: 'white', marginRight: '16px' }}
        >
          Terms & Conditions
        </Link>
        <Link href={`${baseUrl}/privacy`} style={{ color: 'white' }}>
          Privacy Policy
        </Link>
      </Text>
    </Section>
  );
};
