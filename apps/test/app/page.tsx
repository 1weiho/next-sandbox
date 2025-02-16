import { withSandbox } from 'next-sandbox';
import { getAllPosts, seedPosts } from './sandbox-action';

export default withSandbox({
  functions: [
    {
      name: 'Get All Posts',
      function: getAllPosts,
    },
    {
      name: 'Seed Posts',
      function: seedPosts,
    },
  ],
});
