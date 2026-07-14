export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <a
        href="/"
        className="mt-8 rounded-xl bg-primary px-6 py-3 text-primary-foreground"
      >
        Back Home
      </a>
    </main>
  );
}