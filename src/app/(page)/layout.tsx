import { ReactNode } from "react";
import Header from "@/components/wrapper/Header";
import Footer from "@/components/wrapper/Footer";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: ReactNode }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    redirect("/work");
  }
  return (
    <div>
      <Header />
      <div className="min-h-screen max-w-screen-2xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
