// components/Hero.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero(){
  return (
    <section id="hero" className="relative w-full min-h-screen bg-black lg:px-[5vw]" aria-label="Hero">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background image (Next/Image fill -> responsive + optimized) */}
        <Image
          src="/img/home/hero-img.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-top z-0"
        />
      {/* Full dark overlay */}
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

       {/* Left-side darker panel for large screens (moved from right -> left) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-1/2 bg-black/80 pointer-events-none" aria-hidden="true" />

      {/* Content container above overlays; padding accounts for fixed header */}
      <div className="relative z-10 max-w-6xl mx-auto lg:mx-0 px-4 py-72 lg:pl-102">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Focus On Priorities
            </h1>

            <blockquote className="border-l-4 border-[var(--color-primary)] pl-6 text-white/90 mb-6 lg:w-full max-w-prose">
              In today&#39;s competitive landscape, businesses must prioritise core
              operations. Partnering with Willful Solutions delegates software concerns,
              enabling focus on innovation, growth, and satisfaction.
            </blockquote>

            <div className="flex items-center gap-3">
              <Link href="/contact" className="inline-block font-sans font-medium text-base tracking-wide px-10 py-3 rounded-full transition duration-500 my-2 border-2 border-[#DBC078] text-[#DBC078] hover:bg-[#d0ad50] hover:border-[#d0ad50] hover:text-white" aria-label="Get Started">
                Get Started
              </Link>

              {/*<a*/}
              {/*  href="https://www.youtube.com/watch?v=videoid"*/}
              {/*  className="inline-flex items-center gap-2 text-white/90 hover:text-white"*/}
              {/*  aria-label="Watch video"*/}
              {/*  target="_blank"*/}
              {/*  rel="noreferrer"*/}
              {/*>*/}
              {/*  <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>*/}
              {/*    <path d="M8 5v14l11-7z" />*/}
              {/*  </svg>*/}
              {/*  <span>Watch Video</span>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
