"use client";
import { GlobeDemo } from "@/components/hero/GlobeDemo";
import Hero from "@/components/hero/Hero";
import SubHero from "@/components/hero/SubHero";
import Secure from "@/components/Secure";
import Closing from "@/components/wrapper/Closing";

export default function Home() {
  return (
    <>
      <div className="pt-24 text-white min-h-screen bg-foreground">
        <Hero />
        <SubHero />
        <div className="h-full">
          <GlobeDemo />
        </div>
        <Secure />
        <Closing />
      </div>
    </>
  );
}
