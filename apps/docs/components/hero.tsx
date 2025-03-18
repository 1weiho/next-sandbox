import { BookOpen, Github } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="mt-20 md:mt-36">
      <h1 className="text-center md:text-start text-3xl md:text-5xl font-bold">
        Next Sandbox
      </h1>
      <p className="text-center md:text-start mt-8 md:text-2xl text-fd-muted-foreground">
        A lightweight tool for testing and monitoring
        <br />
        server actions in Next.js.
      </p>
      <div className="flex gap-4 mt-8 justify-center md:justify-start">
        <Link
          href="/docs"
          className="bg-fd-card-foreground px-4 py-2 rounded-2xl text-fd-primary-foreground flex items-center gap-2"
        >
          <BookOpen className="size-4" />
          Documentation
        </Link>
        <a
          href="https://github.com/1weiho/next-sandbox"
          target="_blank"
          className="bg-fd-secondary px-4 py-2 rounded-2xl text-fd-secondary-foreground flex items-center gap-2"
        >
          <Github className="size-4" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Hero;
