import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReduxProviderWrapper from "@/components/ReduxProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:"Hardcore merch shop",
  description: "Website for hardcore merchandize and music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProviderWrapper>    
      <html lang="en">
        <body className={inter.className}>
        <Header/>
          {children}</body>
      </html>
    </ReduxProviderWrapper>

  );
}
