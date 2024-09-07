import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/wrapper/Footer";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-foreground",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="min-h-screen max-w-screen-2xl mx-auto w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
