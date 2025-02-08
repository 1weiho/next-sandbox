import { withSandbox } from 'next-sandbox';

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

const getAllPosts = async () => {
  'use server';
  const sleep = (time = 3000) =>
    new Promise((resolve) => setTimeout(resolve, time));
  await sleep(1000);

  return posts;
};

export default withSandbox({
  functions: [
    {
      name: 'Get All Posts',
      function: getAllPosts,
    },
  ],
});
