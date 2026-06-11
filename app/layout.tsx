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
  title: "Joshuva Prabhakar — AI & ML Engineer",
  description:
    "AI & ML Engineer | MSCS @ Stevens Institute of Technology | LLMs, MLOps, Generative AI, Cloud Data Engineering. Open to AI Engineer, ML Engineer, and Data roles.",
  keywords: [
    "AI Engineer", "ML Engineer", "Data Scientist", "Machine Learning",
    "LLM", "MLOps", "Generative AI", "RAG", "Spark", "Databricks",
    "Azure", "AWS", "GCP", "Stevens Institute", "Portfolio",
  ],
  authors: [{ name: "Joshuva Prabhakar Palicharla" }],
  openGraph: {
    title: "Joshuva Prabhakar — AI & ML Engineer",
    description:
      "Building intelligent systems that perform in production. LLMs, MLOps, Generative AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshuva Prabhakar — AI & ML Engineer",
    description: "Building intelligent systems that perform in production.",
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
