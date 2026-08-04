import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-primary-foreground"
      >
        Back Home
      </Link>
    </main>
  );
}