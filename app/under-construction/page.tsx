import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Under Construction',
};

export default function UnderConstruction() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <Image
          src="/img/logo-trim.png"
          alt="Logo"
          width={256}
          height={256}
          className="mx-auto mb-16"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] font-sans">Under Construction</h1>
        <div className="mx-auto my-22 w-12 h-12 rounded-full border-8 text-[var(--color-tertiary)] border-t-[var(--color-primary)] animate-spin" aria-hidden="true" />
        <p className="text-lg text-[var(--color-secondary)]">
          We're currently working on something awesome. Stay tuned!
        </p>
      </div>
    </main>
  );
}