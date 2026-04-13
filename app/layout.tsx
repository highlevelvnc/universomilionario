import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
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

export const metadata: Metadata = {
  title: "Universo Milionário LDA | Construções e Limpezas em Portugal",
  description:
    "Empresa de construção civil e limpezas profissionais em Portugal. Obras de qualidade, remodelações, manutenção e higienização com padrões de excelência.",
  keywords: [
    "construção civil Portugal",
    "limpezas profissionais",
    "remodelações",
    "obras Amadora",
    "Universo Milionário",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
