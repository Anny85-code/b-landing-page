import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Blessing Landing page",
  description: "A landing page for tutorials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
