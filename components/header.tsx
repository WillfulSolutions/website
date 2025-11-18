'use client';
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [sticked, setSticked] = useState(false);

    useEffect(() => {
        const onScroll = () => setSticked(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
          className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-300 ${
            sticked ? "bg-black/90 py-2" : "bg-transparent py-2"
          }`}
          aria-hidden={false}
        >
        <div className="w-full flex items-center justify-between px-4 lg:px-134">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <Image src="/img/logo-trim.png" alt="Logo" width={200} height={200} priority className="w-28 lg:w-42 h-auto" />
          </Link>

          <nav className="hidden xl:flex items-center space-x-6 navbar">
              <Link href="#" className={`text-[var(--color-primary)] hover:text-white font-medium`}>Home</Link>
              <Link href="#about" className={`text-[var(--color-primary)] hover:text-white font-medium`}>About</Link>
              <Link href="#services-list" className={`text-[var(--color-primary)] hover:text-white font-medium`}>Services</Link>
              <Link href="/contact" className={`text-[var(--color-primary)] hover:text-white font-medium`}>Technologies</Link>
              <Link href="/portfolio" className={`text-[var(--color-primary)] hover:text-white font-medium`}>Portfolio</Link>
              <Link href="/contact" className={`text-[var(--color-primary)] hover:text-white font-medium`}>Contact</Link>
          </nav>

         <div className="xl:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={`p-2 mobile-nav-show text-[var(--color-primary)]`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile slide-over */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-black/95 transition-transform duration-300 z-50 transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal={mobileOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-black/40">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <Image src="/assets/img/logo.png" alt="Logo" width={40} height={40} />
          </Link>
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className={`text-[var(--color-primary)] p-2`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-6 flex flex-col space-y-4">
          <Link href="#features" className={`text-[var(--color-primary)] hover:text-white text-lg font-semibold`} onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="#why-us" className={`text-[var(--color-primary)] hover:text-white text-lg font-semibold`} onClick={() => setMobileOpen(false)}>Why Us</Link>
          <Link href="#services-list" className={`text-[var(--color-primary)] hover:text-white text-lg font-semibold`} onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/contact" className={`text-[var(--color-primary)] hover:text-white text-lg font-semibold`} onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
    </header>
    );
}