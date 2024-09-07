import Link from "next/link";

import { CloudIcon } from "../Icons";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CloudIcon className="h-8 text-cyan-400 w-8" />
          <span className="text-xl font-bold">MyLedger</span>
        </Link>

        <p className="text-sm text-muted-foreground">
          &copy; 2024 MyLedger. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
