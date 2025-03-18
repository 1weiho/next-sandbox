import DemoScreenshotDark from '@/static/demo-screenshot-dark.png';
import DemoScreenshotLight from '@/static/demo-screenshot-light.png';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import Image from 'next/image';
import ArrowDown from './illustrations/arrow-down';
import ArrowRight from './illustrations/arrow-right';

const exampleCode = `import { withSandbox } from 'next-sandbox';
import { getAllPosts, seedPosts } from './sandbox-function';

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
});`;

const How = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold">How to use</h2>
      <div className="mt-4 lg:grid grid-cols-5 gap-8">
        <div className="col-span-2">
          <DynamicCodeBlock lang="ts" code={exampleCode} />
          <ArrowRight className="ml-auto mt-4 text-fd-primary hidden lg:block" />
          <ArrowDown className="my-8 text-fd-primary lg:hidden mx-auto" />
        </div>
        <div className="col-span-3">
          <Image
            src={DemoScreenshotLight}
            alt="Demo Screenshot"
            className="border border-fd-border rounded-md dark:hidden"
            quality={100}
          />
          <Image
            src={DemoScreenshotDark}
            alt="Demo Screenshot"
            className="border border-fd-border rounded-md hidden dark:block"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default How;
