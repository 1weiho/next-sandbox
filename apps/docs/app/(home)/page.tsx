import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center">
      <h1 className="mb-4 text-4xl font-bold">Next Sandbox</h1>
      <p className="mb-4 text-fd-muted-foreground">
        A lightweight tool for testing and monitoring server actions in Next.js.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="bg-fd-card-foreground px-4 py-2 rounded-2xl text-fd-primary-foreground"
        >
          Get Started
        </Link>
        <Link
          href="/docs/install"
          className="bg-fd-secondary px-4 py-2 rounded-2xl text-fd-secondary-foreground"
        >
          Installation
        </Link>
      </div>
    </main>
  );
}
