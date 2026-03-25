"use client";
import "../globals.css";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">

        {/* subtle pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_0)] bg-[size:32px_32px]" />
        </div>

        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-widest mb-6">
                Our Legacy
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                Precision You Can <span className="text-[var(--primary)]">Trust</span>
              </h1>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Dedicated to providing world-class diagnostic services with
                state-of-the-art technology and expert care.
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div className="p-5 bg-white/80 backdrop-blur rounded-2xl shadow-md border border-slate-200 hover:shadow-lg transition">
                  <p className="text-3xl font-black text-[var(--primary)] mb-1">25+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                    Years of Excellence
                  </p>
                </div>

                <div className="p-5 bg-white/80 backdrop-blur rounded-2xl shadow-md border border-slate-200 hover:shadow-lg transition">
                  <p className="text-3xl font-black text-[var(--accent)] mb-1">5+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                    Lab Locations
                  </p>
                </div>

              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >

              <div className="absolute -inset-6 bg-gradient-to-tr from-[var(--primary)]/35 via-teal-200 to-transparent blur-3xl opacity-40"></div>

              <Image
                src="/aboutus.png"
                alt="Our laboratory"
                fill
                className="object-cover"
                priority
              />

            </motion.div>

          </div>
        </div>
      </section>

      {/* divider */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary)]/10 px-3 py-1 rounded-full">
              About Alpha Medi Lab
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">
              Excellence in Diagnostic Healthcare
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Alpha Medi Lab is a premier medical laboratory facility committed
              to the highest standards of diagnostic accuracy, reliability, and
              speed. Our facility is equipped with cutting-edge medical
              technology and staffed by a team of highly experienced laboratory
              professionals and consultants.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[var(--primary)]/20 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">

           

              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                Years of Excellence
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                Over two decades of experience in the medical field,
                building a legacy of trust and reliability.
              </p>

            </div>

            {/* Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">

            

              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                Patients Served
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                A milestone reflecting our commitment to public health
                and patient satisfaction.
              </p>

            </div>

            {/* Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">

             

              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
              Accuracy Rate
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                Utilizing rigorous quality control measures and automated
                systems to ensure clinical precision.
              </p>

            </div>

            {/* Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">



              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                Dedicated Support
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                Round-the-clock customer assistance and emergency testing
                services available when you need them most.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/*our purpose */}
      <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--primary)]/20 blur-[120px] rounded-full"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">

            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-[var(--primary)] uppercase bg-[var(--primary)]/10 px-3 py-1 rounded-full">
              Our Purpose
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Delivering trusted diagnostics
            </h2>

            <p className="text-slate-500 mt-4 text-lg">
              Through innovation and patient-centered care
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Mission */}
            <div className="relative p-10 rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed text-center">
                To empower our community and healthcare providers through
                precise and timely diagnostic information. We strive for
                excellence through continuous innovation.
              </p>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--primary)]/25 blur-3xl rounded-full"></div>

            </div>

            {/* Vision */}
            <div className="relative p-10 rounded-[32px] bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

              <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">
                Our Vision
              </h3>

              <p className="text-slate-600 leading-relaxed text-center">
                To be the most trusted and preferred diagnostic partner in the
                region, recognized for our integrity, technological advancement,
                and patient-centric approach.
              </p>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-200/40 blur-3xl rounded-full"></div>

            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* KEEPING YOUR COMMENTED SECTIONS EXACTLY SAME */}

      {/* Leadership Section */}
      {/* unchanged */}

      {/* Accreditations */}
      {/* unchanged */}
    </div>
  );
}