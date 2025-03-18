import Feature from '@/components/feature';
import Hero from '@/components/hero';
import How from '@/components/how';
import Light from '@/components/illustrations/light';
import Tweets from '@/components/tweets';

export default function HomePage() {
  return (
    <main className="container max-w-[1280px]">
      <Light className="absolute -top-40 -right-60 -z-1 hidden lg:block" />
      <Hero />
      <Feature />
      <How />
      <Tweets />
    </main>
  );
}
