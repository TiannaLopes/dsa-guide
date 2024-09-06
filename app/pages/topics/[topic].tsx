import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

type TopicProps = {
  content: string;
};

const Topic: React.FC<TopicProps> = ({ content }) => {
  const router = useRouter();
  const { topic } = router.query;

  return (
    <div>
      <h1>{topic}</h1>
      <p>{content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = ['arrays', 'linked-lists', 'trees'];
  const paths = topics.map((topic) => ({ params: { topic } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topic = params?.topic as string;

  const topics: Record<string, string> = {
    arrays: 'Arrays are...',
    'linked-lists': 'Linked Lists are...',
    trees: 'Trees are...',
  };

  return {
    props: {
      content: topics[topic] || 'Topic not found',
    },
  };
};

export default Topic;
