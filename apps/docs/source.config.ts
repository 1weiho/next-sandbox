import { remarkInstall } from 'fumadocs-docgen';
import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkInstall],
  },
});
