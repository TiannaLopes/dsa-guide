import { NextApiRequest, NextApiResponse } from 'next';

type TopicResponse = {
  topic: string;
  content: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TopicResponse>) {
  const { topic } = req.query;

  const topics: Record<string, string> = {
    arrays: 'Arrays are a fundamental data structure...',
    'linked-lists': 'Linked Lists are a sequence of elements...',
    trees: 'Trees are a hierarchical data structure...',
  };

  if (topic && topics[topic as string]) {
    res.status(200).json({ topic: topic as string, content: topics[topic as string] });
  } else {
    res.status(404).json({ topic: topic as string, content: 'Topic not found' });
  }
}
