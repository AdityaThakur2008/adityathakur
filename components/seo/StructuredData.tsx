export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Thakur",
    url: "https://adityathakur.co.in",
    image: "https://adityathakur.co.in/opengraph-image",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer passionate about building scalable web applications and AI-powered products.",
    email: "hello@adityathakur.co.in",
    sameAs: [
      "https://github.com/Adityathakur975",
      "https://www.linkedin.com/in/adityathakur"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}