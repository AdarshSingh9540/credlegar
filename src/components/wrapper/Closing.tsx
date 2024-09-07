import Link from "next/link"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button"
export default function Closing() {
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto flex flex-col items-center gap-8 px-4">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Register yourself Today</h2>
        <p className="mt-4 text-muted-foreground">
          Get hired today. Stand out of the herd.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
      <RegisterLink className="text-white w-auto font-semibold bg-blue-600 flex justify-center items-center rounded-lg p-2">Register Now</RegisterLink>
        <Link href="#" className="text-sm font-medium hover:text-cyan-400 focus:text-cyan-400" prefetch={false}>
          Learn More
        </Link>
      </div>
    </div>
  </section>
  )
}
