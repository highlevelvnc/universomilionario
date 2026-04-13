import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import CookieBanner from "@/components/CookieBanner";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://universomilionario.pt";

export const metadata: Metadata = {
  title: "Universo Milionário LDA | Construções e Limpezas em Portugal e UE",
  description:
    "Empresa de construção civil e limpezas profissionais em Portugal e na União Europeia. Obras de qualidade, remodelações, manutenção e higienização com padrões de excelência.",
  keywords: [
    "construção civil Portugal",
    "limpezas profissionais",
    "remodelações",
    "obras Amadora",
    "Universo Milionário",
    "construção União Europeia",
    "limpeza pós-obra",
    "manutenção predial",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "Universo Milionário LDA",
    title: "Universo Milionário LDA | Construções e Limpezas Premium",
    description:
      "Construção civil, remodelações e limpezas profissionais em Portugal e na União Europeia. Mais de 15 anos de excelência. Peça já o seu orçamento gratuito.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Universo Milionário — Construções e Limpezas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universo Milionário LDA | Construções e Limpezas",
    description:
      "Construção civil e limpezas profissionais em Portugal e UE. Orçamento gratuito.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Universo Milionário LDA",
    description:
      "Empresa de construção civil e limpezas profissionais em Portugal e na União Europeia.",
    url: SITE_URL,
    telephone: ["+351964456526", "+351933058761", "+351216039832"],
    email: "geral@universomilionario.pt",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Guilherme Gomes Fernandes, n22A",
      addressLocality: "Amadora",
      postalCode: "2725-627",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.7545,
      longitude: -9.2308,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Portugal" },
      { "@type": "Place", name: "European Union" },
    ],
    serviceType: [
      "Construção Civil",
      "Remodelações",
      "Limpezas Profissionais",
      "Manutenção Preventiva",
    ],
    priceRange: "$$",
    image: `${SITE_URL}/og-image.jpg`,
  };

  return (
    <html lang="pt-PT" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <LoadingScreen />
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
