import React from "react";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  color: string; // icon color
  aosDelay?: number;
  href?: string;
  Icon: React.FC<{ className?: string; fill?: string }>;
};

const services: Service[] = [
  {
    title: "Custom Software Solutions",
    description:
      "Willful Solutions provides tailored software solutions to address your unique business needs, enhancing efficiency and productivity.",
    color: "#f57813",
    aosDelay: 100,
    href: "#",
    Icon: ({ className, fill }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 7h16v10H4z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Streamlined Operations",
    description:
      "We optimize your business processes, minimizing complexity and maximizing output for improved performance.",
    color: "#15a04a",
    aosDelay: 200,
    href: "#",
    Icon: ({ className, fill }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 6h18M7 12l3 3 7-7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Market Trends Analysis",
    description:
      "Our team analyzes market trends to provide insights and strategies, ensuring your business stays ahead of the competition.",
    color: "#d90769",
    aosDelay: 300,
    href: "#",
    Icon: ({ className, fill }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 3v18h18" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 13l3-3 4 4 3-7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Efficient Solutions",
    description:
      "We deliver efficient solutions that drive growth and profitability, leveraging cutting-edge technologies and industry best practices.",
    color: "#15bfbc",
    aosDelay: 400,
    href: "#",
    Icon: ({ className, fill }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="12" cy="12" r="3" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Strategic Planning",
    description:
      "We assist in strategic planning, aligning technology solutions with your long-term business objectives for sustainable growth.",
    color: "#f5cf13",
    aosDelay: 500,
    href: "#",
    Icon: ({ className, fill }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2v6" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 20h14" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 8l-7 7-4-4" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description:
      "We foster a culture of continuous improvement, adapting and evolving our solutions to meet changing business needs and market demands.",
    color: "#1335f5",
    aosDelay: 600,
    href: "#",
    Icon: ({ className, fill }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="3" y="7" width="18" height="14" rx="2" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3v4M8 3v4" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ServicesList() {
  return (
    <section id="services-list" className="bg-black py-12 text-white">
      <div className="max-w-8xl px-4  lg:mx-128 lg:px-6" data-aos="fade-up">
        <div className="section-header mb-8">
          <h2 className="text-3xl font-semibold text-[var(--color-primary,#d0ad50)]">Our Services</h2>
        </div>

          <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-x-12">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="service-item flex items-start"
              data-aos="fade-up"
              data-aos-delay={s.aosDelay}
            >
              <div className="flex flex-wrap mr-4">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  aria-hidden
                >
                  <s.Icon className="w-6 h-6" fill={s.color} />
                </div>
              </div>

              <div>
                <h4 className="title text-lg font-semibold mb-1">
                  <Link href={s.href ?? "#"} className="inline-block text-[var(--color-primary,#d0ad50)] hover:text-white">{s.title}</Link>
                </h4>
                <p className="description text-sm leading-6 text-white/90">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    </section>
  );
}