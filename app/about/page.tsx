'use client';

import Image from 'next/image';
import { ShieldCheck, Users, Globe, Award, Microscope, Heart, ArrowRight, Link } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="">
{/* Hero Section */}
      <motion.section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/banner.jpg"
            alt="Alpha Medi Lab Facility"
            fill
            priority
            className="object-cover"
          />
          {/* Solid overlay for light mode readability */}
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


      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">Our Legacy</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                Precision You Can <span className="text-blue-600">Trust</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Dedicated to providing world-class diagnostic services with state-of-the-art technology and expert care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-3xl font-black text-blue-600 mb-1">25+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Years of Excellence</p>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-3xl font-black text-teal-600 mb-1">5+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Lab Locations</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
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

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Excellence in Diagnostic Healthcare</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Alpha Medi Lab is a premier medical laboratory facility committed to the highest standards of diagnostic accuracy, reliability, and speed. Our facility is equipped with cutting-edge medical technology and staffed by a team of highly experienced laboratory professionals and consultants. We bridge the gap between clinical suspicion and accurate diagnosis, ensuring that both healthcare providers and patients receive the information they need to make life-saving decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all group">
              <div className="size-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Legacy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Over two decades of experience in the medical field, building a legacy of trust and reliability.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-white transition-all group">
              <div className="size-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Patient First</h3>
              <p className="text-slate-500 text-sm leading-relaxed">A milestone reflecting our commitment to public health and patient satisfaction.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:bg-white transition-all group">
              <div className="size-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clinical Precision</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Utilizing rigorous quality control measures and automated systems to ensure accuracy.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:bg-white transition-all group">
              <div className="size-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Round-the-clock customer assistance and emergency testing services available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black text-blue-400 mb-2">10M+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tests Performed</p>
            </div>
            <div>
              <p className="text-5xl font-black text-teal-400 mb-2">2M+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Annual Patients</p>
            </div>
            <div>
              <p className="text-5xl font-black text-purple-400 mb-2">150+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expert Pathologists</p>
            </div>
            <div>
              <p className="text-5xl font-black text-rose-400 mb-2">99.9%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Leadership</h2>
              <p className="text-lg text-slate-600">Guided by a team of visionary medical professionals and industry veterans.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline transition-all">
              View All Team <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Dr. Alexander Reed", role: "Founder & Chairman", desc: "A pioneer in molecular diagnostics with over 35 years of experience.", img: "/aboutus.png" },
              { name: "Dr. Elena Martinez", role: "Chief Medical Officer", desc: "Specializes in hematology and leads our nationwide quality programs.", img: "/aboutus.png" },
              { name: "Sarah Jenkins", role: "CEO", desc: "Driving digital transformation and expanding reach to underserved areas.", img: "/aboutus.png" }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Accreditations</h2>
            <p className="text-slate-500">Recognized by leading international health organizations for excellence.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center gap-3">
              <Award size={40} className="text-slate-700" />
              <span className="text-xl font-black text-slate-700">NABL</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={40} className="text-slate-700" />
              <span className="text-xl font-black text-slate-700">CAP</span>
            </div>
            <div className="flex items-center gap-3">
              <Microscope size={40} className="text-slate-700" />
              <span className="text-xl font-black text-slate-700">ISO 15189</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart size={40} className="text-slate-700" />
              <span className="text-xl font-black text-slate-700">NABH</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
