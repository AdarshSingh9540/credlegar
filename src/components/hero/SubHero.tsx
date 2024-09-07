import React from "react";
import { ClockIcon, ShieldIcon, BoltIcon } from "../Icons";
import { Archive, Box, Signature } from "lucide-react";
export default function SubHero() {
  return (
    <section className="py-24 px-6 mb-15 md:px-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <Box className="w-12 h-12 text-cyan-500" />
          <h3 className="mt-4 text-2xl font-bold">Decentralized Storage</h3>
          <p className="mt-2 text-gray-400">
            Securely store your credentials using IPFS or Filecoin
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Signature className="w-12 h-12 text-cyan-500" />
          <h3 className="mt-4 text-2xl font-bold">Smart Contracts</h3>
          <p className="mt-2 text-gray-400">
            Automated verification processes and credential management
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Archive className="h-12 w-12 text-cyan-500" />
          <h3 className="mt-4 text-2xl font-bold">Immutable Records</h3>
          <p className="mt-2 text-gray-400">
            Tamper-proof storage of credential hashes on the blockchain
          </p>
        </div>
      </div>
    </section>
  );
}
