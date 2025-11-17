import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[var(--color-bg-primary)] text-white">
      {/* Footer content */}
      <div className="pt-[60px] pb-[30px]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Info / Logo */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-flex items-center logo" aria-label="Willful Solutions home">
                <Image
                  src="/img/logo-trim.png"
                  alt="Willful Solutions logo"
                  width={200}
                  height={200}
                  priority
                  className="w-28 lg:w-42 h-auto"
                />
              </Link>

              <p className="mt-6 text-[15px] text-white font-[var(--font-primary)]">
                Our mission is to provide businesses with innovative software solutions, empowering them to thrive in a
                competitive environment. We prioritise efficiency, collaboration, and reliable support to help clients
                achieve their goals.
              </p>

              <div className="mt-4 flex items-center space-x-3">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 inline-flex items-center justify-center rounded-full border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-tertiary)] hover:text-black"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 5.92c-.66.3-1.37.5-2.12.59.76-.46 1.34-1.18 1.62-2.04-.71.42-1.5.73-2.34.89A4.02 4.02 0 0 0 12.5 8c0 .32.03.63.1.93-3.34-.17-6.3-1.77-8.28-4.2-.35.6-.55 1.3-.55 2.04 0 1.4.71 2.64 1.8 3.37-.65-.02-1.26-.2-1.8-.5v.05c0 1.95 1.4 3.58 3.26 3.95-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07.52 1.62 2.03 2.8 3.82 2.84A8.07 8.07 0 0 1 3 19.54a11.4 11.4 0 0 0 6.17 1.81c7.4 0 11.45-6.13 11.45-11.45v-.52c.78-.56 1.45-1.27 1.99-2.07-.72.32-1.5.53-2.3.62z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 inline-flex items-center justify-center rounded-full border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-tertiary)] hover:text-black"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12.07C22 6.49 17.52 2 11.94 2S1.88 6.49 1.88 12.07C1.88 17.01 5.88 21 10.66 21v-6.9h-2.3v-2.9h2.3V9.2c0-2.28 1.35-3.54 3.42-3.54.98 0 2.01.17 2.01.17v2.2h-1.13c-1.12 0-1.47.7-1.47 1.41v1.68h2.5l-.4 2.9h-2.1V21C18.12 21 22 17.01 22 12.07z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 inline-flex items-center justify-center rounded-full border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-tertiary)] hover:text-black"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18.5 6a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 18.5 6z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 inline-flex items-center justify-center rounded-full border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] transition hover:bg-[var(--color-tertiary)] hover:text-black"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24H18v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-2 lg:mt-0.5">
              <h4 className="text-[16px] font-bold text-[var(--color-primary)] pb-3">Useful Links</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Home</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#about" className="text-[var(--color-primary)] hover:text-white transition">About us</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#services" className="text-[var(--color-primary)] hover:text-white transition">Services</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Terms of service</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Privacy policy</Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-2 lg:mt-0.5">
              <h4 className="text-[16px] font-bold text-[var(--color-primary)] pb-3">Our Services</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Web Design</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Web Development</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Product Management</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Marketing</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[var(--color-primary)]">—</span>
                  <Link href="#" className="text-[var(--color-primary)] hover:text-white transition">Graphic Design</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 text-center md:text-left lg:mt-0.5">
              <h4 className="text-[16px] font-bold text-[var(--color-primary)] pb-3">Contact Us</h4>
              <p className="text-[14px] text-[var(--color-secondary)] leading-7">
                <strong>Email:</strong> <br />
                <a href="mailto:info@willfulsolutions.co.uk" className="text-[var(--color-secondary)] hover:text-white">info@willfulsolutions.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer legal */}
      <div className="bg-[var(--color-bg-primary)] py-8 border-t border-black/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-[var(--color-primary)]">
            © {new Date().getFullYear()} <strong>Willful Solutions</strong>. All Rights Reserved
          </div>
          <div className="pt-1 text-[13px] text-[var(--color-primary)]">
            Designed by <a href="https://github.com/WillfulSolutions" className="text-[var(--color-secondary)] hover:text-white">Willful Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
