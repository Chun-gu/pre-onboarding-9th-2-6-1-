import { NavLink } from 'react-router-dom';
import { Box, Link, UnorderedList } from '@chakra-ui/react';

export default function Header() {
  const links = [
    { to: '/main', name: '여행 상품' },
    { to: '/reservations', name: '장바구니' },
  ];

  return (
    <Box as="header" height="96px" boxShadow="base" marginBottom="20px">
      <nav>
        <UnorderedList
          height="96px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          listStyleType="none">
          {links.map(({ to, name }) => (
            <li key={to}>
              <Link
                as={NavLink}
                to={to}
                fontWeight="bold"
                fontSize="20px"
                px="10px">
                {name}
              </Link>
            </li>
          ))}
        </UnorderedList>
      </nav>
    </Box>
  );
}
