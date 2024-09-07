import { LockIcon, BoltIcon } from "./Icons";

export default function Secure() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Build your dynamic, verifiable & reliable digital portfolios
          </h2>
          {/* <p className="mt-4 text-muted-foreground">
            DaftPunk provides advanced DDoS protection to keep your applications
            and data safe from malicious attacks.
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <LockIcon className="h-12 w-12 text-cyan-400" />
            <h3 className="text-xl font-bold">Robust Security</h3>
            <p className="text-center text-muted-foreground pr-16 pl-16">
              Our security measures are designed to help employers and employees
              both without compromising on their own privacy and information.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <BoltIcon className="h-12 w-12 text-cyan-400" />
            <h3 className="text-xl font-bold">User Friendly</h3>
            <p className="text-center text-muted-foreground pr-16 pl-16">
              Just paste your profile link to the recruiter or anyone you want
              to share it with and you are good to go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
