import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CloudIcon } from "../Icons";
import {
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Header() {
  return (
    <header className="flex h-16 items-center bg-foreground border-b border-border/20 text-white fixed w-full z-[5] justify-between px-6 md:px-12">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <CloudIcon className="h-8 w-8 text-cyan-400" />
        <span className="text-2xl font-bold">MyLedger</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link
          href="#"
          className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>

      <RegisterLink className="text-white w-auto font-semibold bg-blue-600 flex justify-center items-center rounded-lg p-2">
        Register Now
      </RegisterLink>
    </header>
  );
}

export async function getServerSideProps(context: any) {
  const { isAuthenticated } = getKindeServerSession(context.req);

  return {
    props: {
      isAuthenticated: await isAuthenticated(),
    },
  };
}
