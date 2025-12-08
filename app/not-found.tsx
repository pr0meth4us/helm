'use client';

import Link from 'next/link';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { TextScramble } from '@/components/ui/TextScramble';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-helm-dark">
      <BackgroundGrid />

      <div className="font-mono space-y-6">
        <div className="text-helm-cyan/50 text-sm tracking-[0.5em] animate-pulse">
          ERROR_CODE: 404
        </div>

        <h1 className="text-6xl md:text-9xl font-black text-white mix-blend-overlay opacity-80">
          <TextScramble text="SIGNAL_LOST" />
        </h1>

        <p className="max-w-md mx-auto text-helm-silver/60">
          The requested coordinate does not exist within the current sector.
          Re-establish uplink immediately.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-3 bg-helm-cyan/10 border border-helm-cyan/50 text-helm-cyan font-bold tracking-widest hover:bg-helm-cyan hover:text-helm-dark transition-all duration-300"
          >
            // REBOOT_SYSTEM
          </Link>
        </div>
      </div>
    </div>
  );
}