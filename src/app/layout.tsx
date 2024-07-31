import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import NextAuthProviders from "@/providers/NextAuthProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <NextAuthProviders>
          {children}
        </NextAuthProviders>
      </body>
    </html>
  );
}
