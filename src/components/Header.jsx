import { NavLink } from 'react-router-dom';

export default function Header() {
  const links = [
    { to: '/main', name: '여행 상품 목록' },
    { to: '/reservations', name: '예약 상품 목록' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {links.map(({ to, name }) => (
            <li>
              <NavLink to={to}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
