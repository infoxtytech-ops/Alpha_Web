'use client';
import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  PhoneCall
} from 'lucide-react';
import { motion } from 'motion/react';

// --- DATA ARRAYS ---

const quickActionsData = [
  {
    title: "Book a Lab Test",
    desc: "Choose from a wide range of reliable laboratory tests including blood tests, urine analysis, and other diagnostic screenings.",
    linkText: "Book Test",
    wrapperHover: "hover:border-blue-600/30",
    linkColors: "text-blue-600 hover:text-blue-700"
  },
  {
    title: "Doctor Channeling",
    desc: "Consult experienced doctors across multiple specialties by scheduling your appointment at our main branch.",
    linkText: "Book Appointment",
    wrapperHover: "hover:border-teal-600/30",
    linkColors: "text-teal-600 hover:text-teal-700"
  },
  {
    title: "Home Sample Collection",
    desc: "Get your samples collected safely from the comfort of your home by our trained medical staff.",
    linkText: "Schedule Pickup",
    wrapperHover: "hover:border-purple-600/30",
    linkColors: "text-purple-600 hover:text-purple-700"
  }
];

const statsData = [
  { value: "25+", label: "Years of Experience" },
  { value: "100K+", label: "Patients Served" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "24/7", label: "Customer Support" }
];

const servicesData = [
  { title: "Laboratory Testing", desc: "Comprehensive range of blood tests, urine analysis, and diagnostic tests with accurate results.", image: "/assets/services/lab-test.png" },
  { title: "Doctor Channeling", desc: "Book appointments with experienced doctors across multiple specialties at our main branch.", image: "/assets/services/doc-chaneling.png" },
  { title: "Sample Collection", desc: "Home sample collection service available for your convenience. Call us to schedule.", image: "/assets/services/sample-collection.png" },
  { title: "Emergency Testing", desc: "24/7 emergency testing services for urgent medical situations at our main branch.", image: "/assets/services/Emergency.png" },
  { title: "ECG Services", desc: "Electrocardiogram testing available at all branches for heart health monitoring.", image: "/assets/services/ecg.png" },
  { title: "Health Packages", desc: "Specially designed health screening packages for individuals and families.", image: "/assets/services/packages.png" }
];

const packagesData = [
  {
    title: "Rose Package",
    subtitle: "30% off",
    price: "3,500",
    oldPrice: "5,000",
    features: ["Fasting Blood Sugar", "Lipid Profile", "SGOT/SGPT", "S Creatinine - eGFR", "Full Blood Count", "Urine Full Report(UFR)", "ECG"],
    isPopular: false,
    topBar: "bg-teal-600",
    textHighlight: "text-teal-600",
    buttonStyle: "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white",
  },
  {
    title: "Lotus Package",
    subtitle: "30% off",
    price: "7,000",
    oldPrice: "9.900",
    features: ["Fasting Blood Sugar", "Lipid Profile", "Liver Profile", "Reanal Profile", "FBC", "UFR", "ECG"],
    isPopular: true,
    topBar: "bg-[#2691CA]",
    textHighlight: "text-[#2691CA]",
    buttonStyle: "bg-[#2691CA] text-white hover:bg-[#1f78a7] shadow-lg shadow-[#2691CA]/20",
  },
  {
    title: "Orchid Package",
    subtitle: "30% OFF",
    price: "8,500",
    oldPrice: "11,850",
    features: ["Fasting Blood Sugar", "HbA1C", "Lipid Profile", "Reanal Profile", "Liver Profile", "FBC", "UFR", "ECG"],
    isPopular: false,
    topBar: "bg-purple-500",
    textHighlight: "text-purple-500",
    buttonStyle: "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
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

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

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
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* Hero Section */}
      <motion.section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/banner1.png"
            alt="Alpha Medi Lab Facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-white uppercase tracking-wide">
                Leading Pathology Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
              Your Health, <br />
              <span className="text-blue-400">Our Priority</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-100 max-w-2xl leading-relaxed">
              Accurate diagnostics, cutting-edge technology, and compassionate care for your peace of mind. Experience excellence in medical testing.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/services">
                <button className="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all">
                  Explore Services
                </button> 
              </Link>
              <Link href="/packages">
                <button className="flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/30 hover:-translate-y-1 transition-all">
                  View Packages
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Actions */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActionsData.map((action, i) => (
              <div key={i} className={`group bg-white rounded-xl p-6 shadow-xl border border-slate-100 transition-all hover:-translate-y-1 ${action.wrapperHover}`}>
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{action.title}</h3>
                    <p className="text-sm text-slate-500 mb-3">{action.desc}</p>
                    <a href="tel:+94718227704" className={`text-sm font-semibold flex items-center ${action.linkColors}`}>
                      {action.linkText} <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
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
                <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Working Scroll */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-slate-600 max-w-xl">Comprehensive medical testing and healthcare services delivered with precision and care.</p>
            </div>
            <Link href="/services" className="text-blue-600 font-semibold hover:underline inline-flex items-center">
              View All Services <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar { display: none; }
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 flex-grow">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Preventive Care</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-6">Popular Health Packages</h2>
            <p className="text-lg text-slate-600">Special limited-time offers for comprehensive checkups.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {packagesData.map((pkg, i) => (
              <div 
                key={i} 
                className={`flex flex-col bg-white overflow-hidden rounded-xl transition-all duration-300 shadow-lg ${
                  pkg.isPopular 
                    ? "md:scale-105 md:z-10 border-2 border-blue-600 shadow-2xl" 
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
                      <span className="text-3xl font-black text-slate-900">LKR {pkg.price}</span>
                      <span className="text-slate-400 line-through text-sm">LKR {pkg.oldPrice}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Tests Included</p>
                  
                  <div className="grid grid-cols-1 gap-2 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <CheckCircle2 size={14} className={pkg.textHighlight} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = 'tel:+94718227704'}
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need a specialized test?</h2>
              <p className="text-blue-100 text-lg mb-8">Call our support team to assist you with booking the right tests at the best prices.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+94718227704" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  <PhoneCall size={20} />
                  Call for Support
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Activity size={180} className="text-white/20 rotate-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}