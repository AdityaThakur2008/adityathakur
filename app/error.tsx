"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <h1 className="text-5xl font-bold">
        Something went wrong
      </h1>

      <button
        onClick={() => reset()}
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-primary-foreground"
      >
        Try Again
      </button>
    </main>
  );
}