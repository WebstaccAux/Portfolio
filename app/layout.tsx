import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Webstacc Portfolio — Webdesign & Google Ads aus Augsburg",
    description:
      "Ausgewählte Webdesign- und Performance-Marketing-Projekte von Webstacc: Rechtsschutzpartner24, leads123 und beatstacc.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Webstacc — Wir bauen digitale Vorsprünge.",
      description:
        "Strategie, Webdesign und Performance Marketing aus Augsburg.",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1745,
          height: 907,
          alt: "Webstacc — Wir bauen digitale Vorsprünge.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Webstacc — Wir bauen digitale Vorsprünge.",
      description:
        "Strategie, Webdesign und Performance Marketing aus Augsburg.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

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
