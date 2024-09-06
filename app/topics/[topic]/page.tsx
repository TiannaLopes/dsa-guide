// app/topics/[topic]/page.tsx

export async function generateStaticParams() {
  const topics = ['arrays', 'linked-lists', 'trees', 'sorting', 'searching'];

  return topics.map((topic) => ({
    topic,
  }));
}

export default function Topic({ params }: { params: { topic: string } }) {
  const { topic } = params;

  const topics: Record<string, string> = {
    arrays: 'Arrays are a fundamental data structure...',
    'linked-lists': 'Linked Lists are a sequence of elements...',
    trees: 'Trees are a hierarchical data structure...',
    sorting: 'Sorting algorithms include Quick Sort, Merge Sort, etc...',
    searching: 'Searching algorithms include Binary Search, Linear Search, etc...',
  };

  const content = topics[topic] || 'Topic not found';

  return (
    <div>
      <h1>{topic}</h1>
      <p>{content}</p>
    </div>
  );
}
