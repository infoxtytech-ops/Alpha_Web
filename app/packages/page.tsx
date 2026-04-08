"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck} from "lucide-react";
import { motion } from "motion/react";

const packages = [
  {
    id: 1,
    name: "Rose Package",
    tag: "Essential",
    price: "3,500/-",
    originalPrice: "5,000/-",
    parameters: 7,
    features: [
      "Fasting Blood Sugar",
      "Lipid Profile",
      "SGOT/SGPT",
      "S Creatinine",
      "Full Blood Count",
      "UFR",
      "ECG",
    ],
    color: "accent",
    popular: false,
  },
  {
    id: 2,
    name: "Lotus Package",
    tag: "Best Value",
    price: "7,000/-",
    originalPrice: "9,900/-",
    parameters: 7,
    features: [
      "Fasting Blood Sugar",
      "Lipid Profile",
      "Comprehensive Liver Profile",
      "Comprehensive Renal Profile",
      "FBC",
      "UFR ",
      "ECG",
    ],
    color: "primary",
    popular: true,
  },
  {
    id: 3,
    name: "Orchid Package",
    tag: "Full Body",
    price: "8,500/-",
    originalPrice: "11,850/-",
    parameters: 8,
    features: [
      "HbA1C (Diabetes Check)",
      "Fasting Blood Sugar",
      "Lipid Profile",
      "Comprehensive Liver",
      "Renal",
      "FBC",
      "UFR",
      "ECG",
    ],
    color: "accent",
    popular: false,
  },
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-slate-900">
      {/* Top Banner Offer */}
      <div className="bg-blue-50 py-3 px-4 text-center text-sm font-semibold text-[var(--primary)] border-b border-blue-100">
        Special offer:{" "}
        <span className="font-bold text-[var(--primary)]/80">
          10% discount for senior citizens and students
        </span>
      </div>

      {/* Hero */}
      <section className="relative bg-white py-16 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} />
              Alpha Medi Lab Packages
            </span> */}
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Health Packages for <br />
              <span className="text-[var(--primary)]">Every Lifestyle</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Special limited-time offers. Choose from our curated health
              checkup packages to give you a complete picture of your health.
            </p>
          </motion.div>
        </div>

        {/* Full-width Hero Image */}
        <div className="absolute inset-0 top-auto mt-0 h-full w-full z-0">
          <Image
            src="/assets/banner2.png" 
            alt="Health Packages Hero"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Optional overlay for better text contrast */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col bg-white rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                  pkg.popular
                    ? "border-[var(--primary)] shadow-2xl scale-105 z-10"
                    : "border-slate-200 shadow-sm hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <span
                    className={`text-xs font-black uppercase tracking-widest mb-2 ${
                      pkg.color === "accent"
                        ? "text-[var(--accent)]"
                        : pkg.color === "primary"
                          ? "text-[var(--primary)]"
                          : "text-[var(--neutral)]"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-slate-900">
                      {pkg.price}
                    </span>
                    <span className="text-slate-400 line-through font-bold">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Save 30%
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-8 p-3 bg-slate-50 rounded-xl">
                    <div className="size-8 rounded-lg bg-white flex items-center justify-center text-slate-900 font-bold shadow-sm border border-slate-100">
                      {pkg.parameters}
                    </div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                      Test Parameters
                    </span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1 border-t border-slate-50 pt-6">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-medium text-slate-600"
                      >
                        <CheckCircle2
                          className={`shrink-0 ${
                            pkg.color === "accent"
                              ? "text-[var(--accent)]"
                              : pkg.color === "primary"
                                ? "text-[var(--primary)]"
                                : "text-[var(--neutral)]"
                          }`}
                          size={18}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="tel:+94718227704" className="block w-full">
                    <button
                      className={`w-full py-4 rounded-xl font-black text-sm transition-all shadow-lg ${
                        pkg.color === "accent"
                          ? "bg-[var(--accent)] text-white hover:bg-[var(--accent)]/90"
                          : pkg.color === "primary"
                            ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 shadow-[var(--primary)]/20"
                            : "bg-[var(--neutral)] text-white hover:bg-[var(--neutral)]/90"
                      }`}
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {/* <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Compare Packages</h2>
            <p className="text-slate-500">Find the perfect balance of depth and value for your health needs.</p>
          </div>
          
          <div className="overflow-x-auto border border-slate-100 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="py-6 px-6 text-sm font-black text-slate-400 uppercase tracking-widest">Feature / Test</th>
                  <th className="py-6 px-4 text-center text-slate-900 font-bold">Rose</th>
                  <th className="py-6 px-4 text-center text-[var(--primary)] font-black bg-blue-50/30">Lotus</th>
                  <th className="py-6 px-4 text-center text-slate-900 font-bold">Orchid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 text-sm font-bold text-slate-700">{feature.name}</td>
                    <td className="py-5 px-4 text-center">
                      {feature.rose ? <CheckCircle2 className="mx-auto text-emerald-500" size={20} /> : <span className="text-slate-200">—</span>}
                    </td>
                    <td className="py-5 px-4 text-center bg-blue-50/30">
                      {feature.lotus ? <CheckCircle2 className="mx-auto text-[var(--primary)]" size={20} /> : <span className="text-slate-200">—</span>}
                    </td>
                    <td className="py-5 px-4 text-center">
                      {feature.orchid ? <CheckCircle2 className="mx-auto text-purple-500" size={20} /> : <span className="text-slate-200">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Industrial Packages & Promotions */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              Industrial Packages
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
              We provide specialized health assessments for both Food Handler
              Companies and Non-Food Handler Companies. Our industrial packages
              ensure compliance with health regulations and promote workplace
              well-being.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-center text-slate-900 mb-10">
              Special Promotions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8   border-l-[var(--primary)] shadow-md flex items-start gap-5 transition-transform hover:-translate-y-1">
                <div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/icon-05.svg"
                    alt="Call us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    Family Package
                  </h3>
                  <p className="text-slate-600 font-medium">
                    20% discount when 3 or more family members book together
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8   border-l-[var(--primary)] shadow-md flex items-start gap-5 transition-transform hover:-translate-y-1">
                <div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/icon-06.svg"
                    alt="Call us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-2">
                    Seasonal Offer
                  </h3>
                  <p className="text-slate-600 font-medium">
                    Free vitamin D test with any package booked this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                Why choose our health packages?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    color: "blue",
                    title: "Expert Consultation",
                    desc: "Get the guidance you deserve with our Rosa, Lotus & Orchid Packages. From essential advice to advanced health insights, our experts ensure every step of your journey is clear, personalized, and professional. Rosa’s essential care, Lotus’s comprehensive insights, or Orchid’s premium analysis, we bring expertise, speed, and clarity in one seamless experience.",
                  },
                  {
                    color: "teal",
                    title: "Fastest Turnaround",
                    desc: "With our Rosa, Lotus & Orchid Packages, experience quick and reliable results without the wait. Health checks and reports are processed efficiently so you can focus on what matters most.",
                  },
                  {
                    color: "purple",
                    title: "Smart Reports",
                    desc: "Our Rosa, Lotus & Orchid Packages deliver intuitive, easy-to-read reports. Whether it’s basic summaries or in-depth analytics, understand your health better and take action with confidence.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    {/* <div className={`size-12 rounded-2xl bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center shrink-0`}>
                      <item.icon size={24} />
                    </div> */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="bg-gray-600 rounded-3xl p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-black mb-6">Ready to start your health journey?</h3>
              <p className="text-slate-400 mb-8 font-medium">Book a home collection today and get an additional 10% off on your first booking.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="font-bold">Home Collection Fee</span>
                  <span className="text-emerald-400 font-black">FREE</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="font-bold">Report Consultation</span>
                  <span className="text-emerald-400 font-black">INCLUDED</span>
                </div>
              </div>
              <a href="tel:+94718227704" className="block w-full">
                <button className="w-full mt-8 py-4 bg-[var(--primary)] rounded-xl font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40">
                  Book Home Collection <ArrowRight size={18} />
                </button>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
