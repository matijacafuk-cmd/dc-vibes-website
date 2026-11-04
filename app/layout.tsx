import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DC VIBES | DJ za rođendane, privatne proslave i evente – Varaždin",
  description:
    "DC VIBES pruža DJ usluge, profesionalno ozvučenje i rasvjetu za rođendane, godišnjice, privatne proslave i poslovne evente u Varaždinu i okolici.",
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
