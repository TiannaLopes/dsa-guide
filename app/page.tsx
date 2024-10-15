"use client";

type Topic = {
  title: string;
  description: string;
};

type Topics = Record<string, Topic>;

export default function Home() {
  // Hardcoded topics
  const topics: Topics = {
    arrays: {
      title: "Arrays",
      description:
        "Arrays are a fundamental data structure that store elements at contiguous memory locations.",
    },
    "linked-lists": {
      title: "Linked Lists",
      description:
        "Linked Lists are a sequence of elements where each element points to the next, allowing for efficient insertions and deletions.",
    },
    trees: {
      title: "Trees",
      description:
        "Trees are a hierarchical data structure used to represent hierarchical relationships.",
    },
    sorting: {
      title: "Sorting Algorithms",
      description:
        "Sorting algorithms arrange the elements of a list in a specific order (e.g., ascending or descending).",
    },
    searching: {
      title: "Searching Algorithms",
      description:
        "Searching algorithms are used to find specific elements in data structures like arrays or trees.",
    },
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to DSA Guide</h1>
      <ul className="list-disc pl-5 space-y-4">
        {Object.entries(topics).map(([key, topic]) => (
          <li key={key}>
            <a href={`/topics/${key}`} className="text-blue-500 hover:underline">
              {topic.title}
            </a>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
