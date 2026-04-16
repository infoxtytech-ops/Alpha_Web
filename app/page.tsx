"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

const Controls = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Controls),
  { ssr: false },
);

// --- DATA ARRAYS ---

const quickActionsData = [
  {
    icon: <PhoneCall size={20} />,
    bgIcon: <PhoneCall size={100} />,
    title: "Call Us Now",
    sub: "Speak directly with our team",
    linkText: "+94 71 822 7704",
    href: "tel:+94718227704",
    colorVar: "--accent",
    colorrect: "color-mix(in srgb, var(--accent) 0.1, white)",
    bgOpacity: "0.02",
    borderOpacity: "0.15",
    hoverBorderOpacity: "0.35",
  },
  {
    icon: <PhoneCall size={20} />,
    bgIcon: <PhoneCall size={100} />,
    title: "Book a Test",
    sub: "Laboratory services available",
    linkText: "Book Now",
    href: "tel:+94718227704",
    colorVar: "--primary",
    bgOpacity: "0.02",
    colorrect: "color-mix(in srgb, var(--primary) 0.1, white)",
    borderOpacity: "0.15",
    hoverBorderOpacity: "0.35",
  },
  {
    icon: <PhoneCall size={20} />,
    bgIcon: <PhoneCall size={100} />,
    title: "Home Pickup",
    sub: "Sample collection at home",
    linkText: "Schedule",
    href: "tel:+94718227704",
    colorVar: "--dark-accent",
    bgOpacity: "0.02",
    colorrect: "color-mix(in srgb, var(--dark-accent) 0.1, white)",
    borderOpacity: "0.15",
    hoverBorderOpacity: "0.35",
  },
];

const statsData = [
  { value: "25+", label: "Years of Experience" },
  { value: "100K+", label: "Patients Served" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "24/7", label: "Customer Support" },
];

const servicesData = [
  {
    title: "Laboratory Testing",
    desc: "Comprehensive range of blood tests, urine analysis, and diagnostic tests with accurate results.",
    image: "/assets/services/lab-test.png",
  },
  {
    title: "Doctor Channeling",
    desc: "Book appointments with experienced doctors across multiple specialties at our main branch.",
    image: "/assets/services/doc-chaneling.png",
  },
  {
    title: "Sample Collection",
    desc: "Home sample collection service available for your convenience. Call us to schedule.",
    image: "/assets/services/sample-collection.png",
  },
  {
    title: "Emergency Testing",
    desc: "24/7 emergency testing services for urgent medical situations at our main branch.",
    image: "/assets/services/Emergency.png",
  },
  {
    title: "ECG Services",
    desc: "Electrocardiogram testing available at all branches for heart health monitoring.",
    image: "/assets/services/ecg.png",
  },
  {
    title: "Health Packages",
    desc: "Specially designed health screening packages for individuals and families.",
    image: "/assets/services/packages.png",
  },
];

const packagesData = [
  {
    title: "Rose Package",
    subtitle: "30% OFF",
    price: "3,500",
    oldPrice: "5,000",
    features: [
      "Fasting Blood Sugar",
      "Lipid Profile",
      "SGOT/SGPT",
      "S Creatinine - eGFR",
      "Full Blood Count",
      "Urine Full Report(UFR)",
      "ECG",
    ],
    isPopular: false,
    topBar: "bg-[var(--accent)]",
    textHighlight: "text-[var(--accent)]",
    buttonStyle:
      "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
  },
  {
    title: "Lotus Package",
    subtitle: "30% OFF",
    price: "7,000",
    oldPrice: "9.900",
    features: [
      "Fasting Blood Sugar",
      "Lipid Profile",
      "Liver Profile",
      "Reanal Profile",
      "FBC",
      "UFR",
      "ECG",
    ],
    isPopular: true,
    topBar: "bg-[var(--primary)]",
    textHighlight: "text-[var(--primary)]",
    buttonStyle:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 shadow-lg",
  },
  {
    title: "Orchid Package",
    subtitle: "30% OFF",
    price: "8,500",
    oldPrice: "11,850",
    features: [
      "Fasting Blood Sugar",
      "HbA1C",
      "Lipid Profile",
      "Reanal Profile",
      "Liver Profile",
      "FBC",
      "UFR",
      "ECG",
    ],
    isPopular: false,
    topBar: "bg-[var(--accent)]",
    textHighlight: "text-[var(--accent)]",
    buttonStyle:
      "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
  },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let animationFrameId: number;
    let isPaused = false;

    const startAutoScroll = () => {
      if (!isPaused) {
        scrollAmount += 0.8; // Control speed here
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
      }
      animationFrameId = requestAnimationFrame(startAutoScroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };
    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(startAutoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.section className="relative w-full min-h-[700px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            // src="/assets/banner1.png"
            src="/hero-2.webp"
            alt="Alpha Medi Lab Facility"
            fill
            priority
            className="object-cover"
          />
          {/* <div className="absolute inset-0 bg-slate-900/40 z-10"></div> */}
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 max-w-3xl"
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
              </span>
              <span className="text-xs font-semibold text-white uppercase tracking-wide">
                Leading Pathology Services
              </span>
            </div> */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.1]">
              Your Health, <br />
              <span className="text-[var(--primary)]">Our Priority</span>
            </h1>

            <p className="text-lg sm:text-xl text-black/70 font-semibold max-w-xl leading-relaxed">
              Advanced, accurate, and compassionate medical testing designed to
              give you peace of mind.
            </p>

            <style jsx>{`
              @keyframes rotate {
                100% {
                  transform: rotate(1turn);
                }
              }

              .rainbow::before {
                content: "";
                position: absolute;
                z-index: -2;
                left: -50%;
                top: -50%;
                width: 200%;
                height: 200%;
                background-position: 100% 50%;
                background-repeat: no-repeat;
                background-size: 50% 30%;
                filter: blur(6px);
                background-image: linear-gradient(#fff);
                animation: rotate 4s linear infinite;
              }
            `}</style>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/services">
                <div 
                className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"
                >
                  <button className="px-8 py-3 text-sm font-bold text-black/80 rounded-full bg-[var(--primary)]/70 backdrop-blur flex items-center justify-center hover:bg-[var(--primary)]/60 transition-all">
                    Explore Services
                  </button>
                </div>
              </Link>
              <Link href="/packages">
                <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                  <button className="px-8 py-3 text-sm font-bold text-black/80 rounded-full bg-white/70  backdrop-blur flex items-center justify-center hover:bg-white/60 transition-all">
                    View Packages
                  </button>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Actions */}
      <section className="relative z-20 -mt-12 px-4 pb-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActionsData.map((action, i) => (
              <a
                key={i}
                href={action.href}
                className="group relative overflow-hidden rounded-2xl p-7 bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] flex flex-col cursor-pointer"
                // style={{
                //   borderColor: `color-mix(in srgb, var(${action.colorVar}) ${action.borderOpacity}, white)`,
                // }}
                // onMouseEnter={(e) => {
                //   e.currentTarget.style.borderColor = `color-mix(in srgb, var(${action.colorVar}) ${action.hoverBorderOpacity}, white)`;
                // }}
                // onMouseLeave={(e) => {
                //   e.currentTarget.style.borderColor = `color-mix(in srgb, var(${action.colorVar}) ${action.borderOpacity}, white)`;
                // }}
              >
                {/* Barely-visible floating BG icon */}
                <div
                  className="absolute -right-4 -bottom-3 w-24 h-24 opacity-[0.09] pointer-events-none group-hover:opacity-[0.16] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  style={{
                    color: `var(${action.colorVar})`,
                  }}
                >
                  {action.bgIcon}
                </div>
                {/* Full-size colored background rectangle */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none -z-10 transition-all duration-300 group-hover:scale-105 group-hover:opacity-[0.04]"
                  // opacity-[0.04]
                  // group-hover:opacity-[0.08]
                  // transition-all duration-300"
                  style={{
                    backgroundColor: `var(${action.colorrect})`,
                  }}
                ></div>

                <h3 className="text-base font-semibold text-slate-900">
                  {action.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{action.sub}</p>

                {/* CTA row */}
                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-semibold group-hover:gap-3 transition-all"
                  style={{
                    color: `var(${action.colorVar})`,
                  }}
                >
                  <span>{action.linkText}</span>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(${action.colorVar}) 0.2, white)`,
                      color: `var(${action.colorVar})`,
                    }}
                  >
                    <ArrowRight size={10} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Working Scroll */}
      <section className="py-16 pb-4 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Services
              </h2>
              <p className="text-slate-600 max-w-xl">
                Comprehensive medical testing and healthcare services delivered
                with precision and care.
              </p>
            </div>
            <Link
              href="/services"
              className="text-[var(--primary)] font-semibold hover:underline inline-flex items-center"
            >
              View All Services <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {servicesData.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all flex flex-col flex-shrink-0 w-[300px] md:w-[350px]"
              >
                <div className="relative w-full h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 flex-grow">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[var(--primary)] font-bold text-sm tracking-wider uppercase">
              Preventive Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-6">
              Popular Health Packages
            </h2>
            <p className="text-lg text-slate-600">
              Special limited-time offers for comprehensive checkups.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {packagesData.map((pkg, i) => (
              <div
                key={i}
                className={`flex flex-col bg-white overflow-hidden rounded-xl transition-all duration-300 shadow-lg ${
                  pkg.isPopular
                    ? "md:scale-105 md:z-10 border-2 border-[var(--primary)] shadow-2xl"
                    : "shadow-md hover:shadow-xl border border-slate-100"
                }`}
              >
                <div className={`${pkg.topBar} text-white px-6 py-8 relative`}>
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-0 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-1">{pkg.title}</h3>
                  <p className="text-sm text-white/90">{pkg.subtitle}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900">
                        LKR {pkg.price}
                      </span>
                      <span className="text-slate-400 line-through text-sm">
                        LKR {pkg.oldPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Tests Included
                  </p>

                  <div className="grid grid-cols-1 gap-2 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm font-medium text-slate-600"
                      >
                        <CheckCircle2 size={14} className={pkg.textHighlight} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => (window.location.href = "tel:+94718227704")}
                    className={`w-full py-3 rounded-lg font-bold transition-all ${pkg.buttonStyle}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 py-10">
            {statsData.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-[var(--primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/20">
            <div className="hidden md:flex absolute top-0 right-0 h-full w-[45%] items-center justify-end opacity-100 pointer-events-none z-10">
              <Player
                autoplay
                loop
                src="/Tape Medical.json"
                style={{ height: "80%", width: "80%" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Need a specialized test?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Call our support team to assist you with booking the right tests
                at the best prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+94718227704"
                  className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"
                >
                  <div className="px-8 py-3 text-sm font-bold text-white rounded-full bg-white/20 backdrop-blur flex items-center justify-center gap-2 hover:bg-white/30 transition-all">
                    <PhoneCall size={18} />
                    Call for Support
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
