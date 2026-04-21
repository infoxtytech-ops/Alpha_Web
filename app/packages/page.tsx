"use client";

import Image from "next/image";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

const faqs = [
  {
    question: "How do I book a home collection?",
    answer:
      "You can book a home collection through our website, mobile app, or by calling our toll-free number. Simply select your tests, choose a convenient time slot, and our certified phlebotomist will visit your home.",
  },
  {
    question: "When will I receive my reports?",
    answer:
      "Most routine test reports are delivered within 6-12 hours. Specialized tests may take 24-48 hours. You will receive an SMS and email notification once your report is ready for download.",
  },
  {
    question: "Do I need to fast before my blood test?",
    answer:
      "Fasting requirements vary by test. For example, a Lipid Profile or Blood Sugar Fasting test requires 10-12 hours of fasting. Please check the specific test instructions in our directory or ask our support team.",
  },
  {
    question: "How can I download my reports online?",
    answer:
      "Visit the 'Download Reports' section on our homepage, enter your Lab ID and registered mobile number, and verify with the OTP sent to your phone to access your digital reports.",
  },
];

export default function PackagesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
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
            <h1 className="text-4xl md:text-6xl font-black tex   t-slate-900 mb-6 leading-tight">
              Health Packages for <br />
              <span className="text-[var(--primary)]">Every Lifestyle</span>
            </h1>
            <p className="text-lg text-black/70 font-semibold max-w-2xl mx-auto mb-10">
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
      <section className="py-10 pb-5 bg-slate-50">
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

                  {/* <div className="flex items-center gap-2 mb-8 p-3 bg-slate-50 rounded-xl">
                    <div className="size-8 rounded-lg bg-white flex items-center justify-center text-slate-900 font-bold shadow-sm border border-slate-100">
                      {pkg.parameters}
                    </div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">
                      Test Parameters
                    </span>
                  </div> */}

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
      <section className="py-10 pb-5 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-3 lg:px-8">
          {/* <div className="mb-16 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              Industrial Packages
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
              We provide specialized health assessments for both Food Handler
              Companies and Non-Food Handler Companies. Our industrial packages
              ensure compliance with health regulations and promote workplace
              well-being.
            </p>
          </div>   */}

          <h2 className="text-3xl font-black text-center text-slate-900 mb-10">
            Special Promotions
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Family Package",
                desc: "20% discount when 3 or more family members book together",
                icon: "/icon-05.svg",
              },
              {
                title: "Seasonal Offer",
                desc: "Free vitamin D test with any package booked this month",
                icon: "/icon-06.svg",
              },
              {
                title: "Industrial Packages",
                desc: "Special health screening packages for food and non-food industry employees.",
                icon: "/icon-07.svg",
              },
              {
                title: "Senior Citizen Offer",
                desc: "10% discount available for senior citizens on all packages",
                icon: "/icon-07.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  {/* <div className="relative size-14 rounded-2xl overflow-hidden shadow-sm bg-blue-50 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div> */}

                  <h3 className="text-xl font-black text-[var(--primary)]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 font-medium mb-8">{item.desc}</p>

                {/* Call Button */}
                <a href="tel:+94718227704">
                  <button className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-bold hover:bg-[var(--primary)]/90 transition-all shadow-md">
                    Call Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
<section className="relative   pb-10 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/services-banner.webp"
      alt="Medical background"
      fill
      className="object-cover"
      priority
    />

    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
  </div>

<div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-10 rounded-full"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
      Why choose our health packages?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Expert Consultation",
          points: [
            "Get guidance with Rosa, Lotus & Orchid packages",
            "From essential advice to advanced insights",
            "Clear, personalized & professional care",
            "Choose your level: essential, comprehensive, or premium",
          ],
        },
        {
          title: "Fastest Turnaround",
          points: [
            "Quick and reliable results",
            "Efficient health check processing",
            "No unnecessary waiting",
            "Focus on what matters most",
          ],
        },
        {
          title: "Smart Reports",
          points: [
            "Intuitive and easy-to-read format",
            "Basic summaries or in-depth analytics",
            "Understand your health better",
            "Take action with confidence",
          ],
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="
            bg-white/80
            backdrop-blur-md
            rounded-3xl
            p-8
            border border-white/40
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          {/* Title */}
          <h4 className="text-lg font-black text-[var(--primary)] mb-6">
            {item.title}
          </h4>

          {/* Points List */}
          <ul className="space-y-3 text-left">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 size-2 rounded-full bg-[var(--primary)] shrink-0"></span>
                <span className="text-sm font-medium text-slate-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

  </div>

</section>

      {/* FAQ Section */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10 py-10 pb-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Quick answers to common questions about bookings, reports and home collections.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/40"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`shrink-0 text-[var(--primary)] transition-transform duration-300 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 bg-white border-t border-slate-100">
                    <p className="text-base text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
