import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshuva Prabhakar — Software Engineer",
  description:
    "Software Engineer | MS CS, Stevens Institute of Technology | Python, SQL, REST APIs, Cloud, Docker, CI/CD, data pipelines, GenAI/RAG. Open to Software Engineer, Backend, and Data roles.",
  keywords: [
    "Software Engineer", "Software Developer", "Backend Engineer", "Data Engineer",
    "Python", "SQL", "REST APIs", "Docker", "CI/CD", "ETL", "Spark", "Databricks",
    "Azure", "AWS", "GCP", "GenAI", "RAG", "Stevens Institute", "Portfolio",
  ],
  authors: [{ name: "Joshuva Prabhakar Palicharla" }],
  metadataBase: new URL("https://joshuva-portfolio.vercel.app"),
  openGraph: {
    title: "Joshuva Prabhakar — Software Engineer",
    description:
      "Reliable applications, backend services, and data pipelines. Python, SQL, REST APIs, Cloud, Docker, CI/CD.",
    type: "website",
    url: "https://joshuva-portfolio.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joshuva Prabhakar Palicharla — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshuva Prabhakar — Software Engineer",
    description: "Reliable applications, backend services, and data pipelines.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
