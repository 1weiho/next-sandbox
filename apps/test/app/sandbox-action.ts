'use server';

interface Post {
  id: number;
  name: string;
}

const posts: Post[] = [
  {
    id: 1,
    name: 'Hello World',
  },
];

const sleep = (time = 3000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const getAllPosts = async () => {
  'use server';

  return posts;
};

export const seedPosts = async () => {
  await sleep(1000);

  // throw new Error('Failed to connect to the database.');

  return {
    success: true,
    message: 'Seed 1000 posts to the database.',
  };
};
