import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import StructuredData from "@/components/seo/StructuredData";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityathakur.co.in"),

  title: {
    default: "Aditya Thakur | Full Stack Developer",
    template: "%s | Aditya Thakur",
  },

  description:
    "Portfolio of Aditya Thakur, a Full Stack Developer passionate about building scalable web applications, AI-powered products, and modern user experiences using Next.js, React, TypeScript, Node.js, PostgreSQL and AI.",

  keywords: [
    "Aditya Thakur",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "AI Developer",
    "Portfolio",
    "Software Engineer",
    "India",
  ],

  authors: [
    {
      name: "Aditya Thakur",
      url: "https://adityathakur.co.in",
    },
  ],

  creator: "Aditya Thakur",

  publisher: "Aditya Thakur",

  alternates: {
    canonical: "https://adityathakur.co.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adityathakur.co.in",
    title: "Aditya Thakur | Full Stack Developer",
    description:
      "Building modern web applications, AI-powered products and scalable backend systems.",

    siteName: "Aditya Thakur Portfolio",
    images: [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Aditya Thakur Portfolio",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aditya Thakur | Full Stack Developer",
    description:
      "Building modern web applications, AI-powered products and scalable backend systems.",
    images: ["/opengraph-image"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
         <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}>
          {children}

          <Toaster position="top-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
