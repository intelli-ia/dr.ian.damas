import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Ian Damas | Cirurgião do Aparelho Digestivo",
  description:
    "Cirurgias seguras, minimamente invasivas e com recuperação rápida — conduzidas por quem lidera equipes no maior centro de trauma do Rio de Janeiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4TZ6CWQLRL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4TZ6CWQLRL');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
