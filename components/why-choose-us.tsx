"use client";
import React, {useEffect, useRef, useState} from 'react';

type Slide = {
    title: string;
    subtitle: string;
    text: string;
};

const slidesData: Slide[] = [
    {
        title: "Custom Solutions",
        subtitle: "Tailored to meet your unique business needs.",
        text: "Choose WillfulSolutions for tailored software solutions designed to address your unique business requirements, driving efficiency and productivity.",
    },
    {
        title: "Expertise and Innovation",
        subtitle: "Stay ahead with cutting-edge solutions.",
        text:
      "WillfulSolutions brings expertise and innovation to the table, ensuring your business stays ahead of the curve with state-of-the-art software solutions.",
    },
    {
        title: "Reliable Support",
        subtitle: "Dedicated support for your success",
        text:
          "Count on WillfulSolutions for reliable support and assistance throughout your software journey, ensuring your success and satisfaction every step of the way.",
    },
    {
        title: "Collaborative Partnership",
        subtitle: "Partner with us for mutual success",
        text:
          "WillfulSolutions fosters a collaborative partnership, working closely with you to achieve mutual success and accomplish your business objectives together.",
    },
];

export default function WhyChooseUs(){
    const [index, setIndex] = useState(0);
    const autoplayRef = useRef<number | null>(null);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const AUTOPLAY_INTERVAL = 5000;

    useEffect(() => {
        startAutoplay();
        return stopAutoplay;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const startAutoplay = () => {
        stopAutoplay();
        autoplayRef.current = window.setInterval(() => {
            handleNext();
        }, AUTOPLAY_INTERVAL);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    };

    const handlePrev = () => {
        setIndex((i) => (i - 1 + slidesData.length) % slidesData.length);
    }

    const handleNext = () => {
        setIndex((i) => (i + 1) % slidesData.length);
    }

    const goTo = (i: number) => {
        setIndex(i);
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
    };

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (touchStartX.current == null || touchEndX.current == null) return;
        const delta = touchStartX.current - touchEndX.current;
        const threshold = 50;
        if (delta > threshold) handleNext();
        else if (delta < -threshold) handlePrev();
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section id="why-us" className="bg-black pb-2 text-white">
      <div className="px-4 sm:mx-auto  md:mx-0 lg:container lg:mx-auto lg:px-6 " data-aos="fade-up">
        <div className="section-header py-8">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        </div>

        <div
          className="grid grid-cols-12 gap-0 items-stretch"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="col-span-12 xl:col-span-5 bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/home/team-meeting-1.jpg')",
              minHeight: 500,
            }}
          />

          <div className="col-span-12 xl:col-span-7 relative bg-black">
            <div
              className="overflow-hidden"
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
              onKeyDown={onKeyDown}
              tabIndex={0}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                  width: `${slidesData.length * 100}%`,
                }}
              >
            {slidesData.map((s, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex items-center justify-start lg:justify-center"
                style={{ minHeight: 500 }}
              >
                <div className="w-full px-6 md:px-24 lg:px-64">
                  <div className="max-w-2xl">
                    <h3 className="mb-3 text-2xl font-bold" style={{ color: "#d0ad50" }}>
                      {s.title}
                    </h3>
                    <h4
                      className="mb-3 text-lg font-normal"
                      style={{ color: "#DBC078", fontFamily: "var(--font-primary, system-ui)" }}
                    >
                      {s.subtitle}
                    </h4>
                    <p className="text-white w-1/2 md:w-2/3">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 relative">
                <div className="flex gap-3">
                  {slidesData.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === i ? "w-4 h-4" : ""
                      }`}
                      style={{
                        backgroundColor: index === i ? "#d0ad50" : "#DBC078",
                        border: "none",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next */}
            <button
              type="button"
              aria-label="Previous slide"
              onClick={handlePrev}
              className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 lg:left-24 z-50 w-16 h-16 md:w-20 md:h-20 text-[#DBC078] hover:text-[#d0ad50] rounded-full text-4xl md:text-5xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ad50] bg-transparent"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={handleNext}
              className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 lg:-right-5 z-50 w-16 h-16 md:w-20 md:h-20 text-[#DBC078] hover:text-[#d0ad50] rounded-full text-4xl md:text-5xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d0ad50] bg-transparent"
            >
              ›
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}