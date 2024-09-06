// app/topics/[topic]/page.tsx

"use client";  // Add this directive at the top of the file

import { useParams } from "next/navigation";

// Component to render content for each topic
const Topic = () => {
  const params = useParams(); // Use next/navigation to get the dynamic parameters
  const topic = params?.topic as string; // Extract the 'topic' parameter from the URL

  // Static content for each topic
  const topics: Record<string, string> = {
    arrays: 'Arrays are a fundamental data structure...',
    'linked-lists': 'Linked Lists are a sequence of elements...',
    trees: 'Trees are a hierarchical data structure...',
    sorting: 'Sorting algorithms include Quick Sort, Merge Sort, etc...',
    searching: 'Searching algorithms include Binary Search, Linear Search, etc...',
  };

  const content = topics[topic] || 'Topic not found'; // Get the content based on the topic

  return (
    <div>
      <h1>{topic}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Topic;
