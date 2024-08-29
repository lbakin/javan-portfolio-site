import type { Metadata } from "next";
import Head from 'next/head'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javan Ivey",
  description: "Javan Ivey Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
       <link
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@300;400;500;700&family=Josefin+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      
      <body className="font-sans">
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
