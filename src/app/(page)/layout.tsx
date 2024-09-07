import { ReactNode } from "react";
import Header from "@/components/wrapper/Header";
import Footer from "@/components/wrapper/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <div className="min-h-screen max-w-screen-2xl mx-auto w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
