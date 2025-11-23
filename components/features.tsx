
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Feature = {
  icon: React.ReactNode;
  text: string;
};

const features: Feature[] = [
  { icon: <i className="bi bi-shop text-[#ffbb2c] text-2xl" />, text: "Customizable E-commerce Solutions" },
  { icon: <i className="bi bi-bar-chart-line text-[#5578ff] text-2xl" />, text: "Data Analysis and Reporting" },
  { icon: <i className="bi bi-calendar-week text-[#e80368] text-2xl" />, text: "Task Management Solutions" },
  { icon: <i className="ri-paint-brush-line text-[#e361ff] text-2xl" />, text: "Custom Design Services" },
  { icon: <i className="ri-database-2-line text-[#47aeff] text-2xl" />, text: "Database Management Solutions" },
  { icon: <i className="bi bi-graph-up text-[#ffa76e] text-2xl" />, text: "Integrated Marketing Solutions" },
  { icon: <i className="ri-file-list-3-line text-[#11dbcf] text-2xl" />, text: "Document Management Systems" },
  { icon: <i className="ri-base-station-line text-[#ff5828] text-2xl" />, text: "Communication Solutions" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-black pb-0">
      {/* Main container */}
      <div className="max-w-8xl px-4 pt-20 lg:mx-128 lg:px-6" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Column */}
          <div className="lg:w-7/12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-[var(--color-primary)] text-2xl md:text-3xl font-bold mb-8">
              Powerful Features for <br /> Your Business
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              {features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  {f.icon}
                  <span className="text-white text-lg">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Phone Image */}
<div className="w-full lg:w-5/12 relative flex justify-center mt-10 lg:mt-0">
  <div
    className="
      phone-wrap
      relative
      lg:absolute lg:right-0 lg:top-10
      mx-auto
      w-[240px]
      sm:w-[260px]
      md:w-[300px]
      lg:w-[340px]
    "
  >
    <Image
      width={340}
      height={700}
      src="/img/home/phone.jpg"
      alt="Phone"
      className="w-full h-auto"
    />
  </div>
</div>
        </div>
      </div>

      {/* Details Section */}
      <div className="details bg-[#0a0a0a] mt-20 py-20">
        <div className="max-w-8xl px-4 lg:mx-128 lg:px-6" data-aos="fade-up" data-aos-delay="300">
          <div className="lg:w-6/12">
            <h4 className="text-[var(--color-primary)] text-2xl md:text-3xl font-bold mb-5">
              Custom Solutions for Your Business
            </h4>
            <p className="text-white mb-5 text-base w-2/3">
              WillfulSolutions offers a range of powerful features tailored to meet the specific needs of your business. From e-commerce solutions to data analysis and reporting, we provide comprehensive services to drive your business forward.
            </p>
              <Link href="/contact" className="inline-block font-sans font-medium text-base tracking-wide px-10 py-3 rounded-full transition duration-500 my-2 border-2 bg-[#d0ad50] border-[#d0ad50] text-black hover:bg-transparent hover:border-[#d0ad50] hover:text-[#d0ad50]" aria-label="Get Started">
                Get Started
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
