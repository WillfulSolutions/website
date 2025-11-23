"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="relative py-25 text-left overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/img/home/cta-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/80 -z-10" />

      <div className="max-w-8xl px-4 lg:mx-128 lg:px-6" data-aos="fade-up">
          <h3 className="text-[var(--color-primary)] text-2xl md:text-3xl font-bold mb-6">
            Contact Us for Expert Solutions
          </h3>
          <p className="text-white mb-6 max-w-2xl">
            Ready to take your business to the next level? Get in touch with
            WillfulSolutions today for expert software solutions tailored to
            your needs.
          </p>
              <Link href="/contact" className="inline-block font-sans font-medium text-base tracking-wide px-10 py-3 rounded-full transition duration-500 my-2 border-2 bg-[#d0ad50] border-[#d0ad50] text-black hover:bg-transparent hover:border-[#d0ad50] hover:text-[#d0ad50]" aria-label="Get Started">
                Get Started
              </Link>
      </div>
    </section>
  );
}