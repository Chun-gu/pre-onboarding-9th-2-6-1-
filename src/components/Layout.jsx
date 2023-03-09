import { Container } from '@chakra-ui/react';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container as="main" centerContent>
        {children}
      </Container>
    </>
  );
}
