import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://webstacc.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Webstacc Portfolio — Webdesign & Google Ads aus Augsburg",
  description:
    "Ausgewählte Webdesign- und Performance-Marketing-Projekte von Webstacc: Rechtsschutzpartner24, leads123 und beatstacc.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Webstacc — Wir bauen digitale Vorsprünge.",
    description: "Strategie, Webdesign und Performance Marketing aus Augsburg.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1745,
        height: 907,
        alt: "Webstacc — Wir bauen digitale Vorsprünge.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webstacc — Wir bauen digitale Vorsprünge.",
    description: "Strategie, Webdesign und Performance Marketing aus Augsburg.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
