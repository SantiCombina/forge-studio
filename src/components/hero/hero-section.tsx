export function HeroSection() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-32">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
        Welcome to <span className="text-blue-600">Next.js 16</span>
      </h1>
      <a href="#" className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight">
        Forge<span className="text-primary">.</span>
      </a>
      <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
        Get started by editing{' '}
        <code className="rounded-md bg-gray-100 px-3 py-2 font-mono text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          src/app/page.tsx
        </code>
      </p>
    </main>
  );
}
