import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Shankar Kohli | Luxury Real Estate Advisor in Gurugram",
    template: "%s | Shankar Kohli",
  },
  description:
    "Shankar Kohli is a trusted luxury real estate advisor in Gurugram, specializing in branded residences, ultra-luxury homes, and high-value property investments.",

  keywords: [
    "Shankar Kohli",
    "Luxury real estate Gurugram",
    "Branded residences Gurgaon",
    "Ultra luxury homes India",
    "High-end property advisor",
  ],

  authors: [{ name: "Shankar Kohli" }],
  creator: "Shankar Kohli",

  metadataBase: new URL("https://shankarkohli.com"),

  openGraph: {
    title: "Shankar Kohli | Luxury Real Estate Advisor",
    description:
      "Explore premium branded residences and luxury property investments in Gurugram with expert advisory.",
    url: "https://shankarkohli.com",
    siteName: "Shankar Kohli",
    images: [
      {
        url: "https://shankarkohli.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Real Estate in Gurugram",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shankar Kohli | Luxury Real Estate Advisor",
    description:
      "Discover luxury homes and branded residences in Gurugram with expert guidance.",
    images: ["https://shankarkohli.com/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://shankarkohli.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body
    className={`${playfair.variable} ${inter.variable} bg-[#0D0D0D] text-white antialiased overflow-x-hidden`}
  >
    <div className="w-full overflow-x-hidden">
      {children}
    </div>
  </body>
</html>
  );
}