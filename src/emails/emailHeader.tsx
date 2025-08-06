import { Column, Img, Link, Row, Section } from '@react-email/components';

interface HeaderProps {
  baseUrl?: string;
}

const styles = {
  header: {
    backgroundColor: 'hsl(248,49%,56%)',
    padding: '16px',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 16px',
  },
  logo: {
    maxWidth: '120px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: 'white',
    fontSize: '14px',
    textDecoration: 'none',
    padding: '0 8px',
  },
};

export const Header = ({ baseUrl = 'https://example.com' }: HeaderProps) => {
  return (
    <Section style={styles.header}>
      <Row style={styles.container}>
        <Column style={{ width: '33%', textAlign: 'left' }}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="120"
            height="40"
            alt="Company Logo"
            style={styles.logo}
          />
        </Column>
        <Column style={{ width: '67%' }}>
          <Row style={styles.nav}>
            {['Home', 'About', 'Contact', 'Booking', 'Terms', 'Privacy'].map(
              (item) => (
                <Column key={item} style={{ padding: '0 8px' }}>
                  <Link
                    href={`${baseUrl}/${item.toLowerCase()}`}
                    style={styles.link}
                  >
                    {item}
                  </Link>
                </Column>
              ),
            )}
          </Row>
        </Column>
      </Row>
    </Section>
  );
};
