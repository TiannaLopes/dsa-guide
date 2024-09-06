import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/topics/arrays">Arrays</Link></li>
          <li><Link href="/topics/linked-lists">Linked Lists</Link></li>
          <li><Link href="/topics/trees">Trees</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
