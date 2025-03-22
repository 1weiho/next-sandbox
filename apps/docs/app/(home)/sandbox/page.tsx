import { withSandbox } from 'next-sandbox';
import { getAllPosts, seedPosts, throwError } from './action';

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
    {
      name: 'Test Throw Error',
      function: throwError,
    },
  ],
});
