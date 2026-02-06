import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local"; // Correct import for local fonts
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Agila-WHS",
    template: "%s | Agila-WHS",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "Agila-WHS",
    description: "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://agila-whs.com",
    siteName: "Agila-WHS",
    images: [
      {
        url: "https://agila-whs.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Use LocalFont to load your local font
const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${calSans.variable}`}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}
      >
        {children}
      </body>
    </html>
  );
}