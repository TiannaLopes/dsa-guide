import axios from 'axios';

export const fetchTopic = async (topic: string) => {
  const response = await axios.get(`/api/topic?topic=${topic}`);
  return response.data;
};
