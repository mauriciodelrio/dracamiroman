import type { Metadata } from "next";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  title: "Dra Cami Román",
  description: "Odontóloga general entregada a la salud bucal de sus pacientes a precios accesibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
