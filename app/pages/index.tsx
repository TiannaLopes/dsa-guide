import Link from 'next/link';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>DSA Guide</title>
        <meta name="description" content="Learn Data Structures and Algorithms" />
      </Head>
      <div>
        <h1>Welcome to DSA Guide</h1>
        <ul>
          <li><Link href="/topics/arrays">Arrays</Link></li>
          <li><Link href="/topics/linked-lists">Linked Lists</Link></li>
          <li><Link href="/topics/trees">Trees</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
