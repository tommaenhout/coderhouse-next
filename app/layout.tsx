import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReduxProviderWrapper from "@/components/ReduxProviderWrapper";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/context/CartContext";
import { Toaster } from "@/components/Toaster";
import { AuthProvider } from "@/components/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hardcore merch shop",
  description: "Website for hardcore merchandize and music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <CartProvider>
        <ReduxProviderWrapper>
          <html lang="en">
            <body className={inter.className}>
              <Header />
              <Cart />
              {children}
              <Toaster />
              <div className="h-[200px]" />
              <Footer />
            </body>
          </html>
        </ReduxProviderWrapper>
      </CartProvider>
    </AuthProvider>
  );
}
