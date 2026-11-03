import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DC VIBES | DJ, Sound & Lights",
  description:
    "Profesionalni DJ nastupi, razglas, rasvjeta i efekti za vaše evente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
