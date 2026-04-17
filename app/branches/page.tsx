"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const branches = [
  {
    id: "main",
    name: "Main Branch",
    address:
      "222/B, Kandy Road, Dalugama, Kelaniya (Opposite of Kelaniya University)",
    phones: ["0112 906 949", "0112 993 917", "071 822 7704"],
    hours: "Mon-Sat: 6:00 AM - 8:00 PM, Sun/Poya: 6:00 AM - 6:00 PM",
    services: [
      "Full Laboratory Services",
      "Doctor Channeling",
      "Sample Collection",
      "Emergency Testing",
      "ECG",
    ],
    image: "/assets/branches/alphaHome.png",
    mapLink: "https://maps.app.goo.gl/Jqj9mYvkkERfGcZM6?g_st=ipc",
  },
  {
    id: "kiribathgoda",
    name: "Kiribathgoda Branch",
    address:
      "Sudarshanarama Rd, Kiribathgoda (Near Kiribathgoda Base Hospital)",
    phones: ["0112 984 661", "071 960 7974"],
    hours:
      "Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 6:00 PM, Poya: 6:30 AM - 12 Noon",
    services: ["Sample Collection", "Dr Channeling", "OPD", "ECG"],
    image: "/assets/branches/kiribathgoada.png",
    mapLink: "https://maps.app.goo.gl/AgBphZidxNrHTmd9A?g_st=ipc",
  },
  {
    id: "makola",
    name: "Makola Branch",
    address: "Galpottha Junction, Makola South, Makola",
    phones: ["0112 269 949"],
    hours: "Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/makola.png",
    mapLink: "https://maps.app.goo.gl/U8c8rZAoJ4UUSLMr5?g_st=ipc",
  },
  {
    id: "kohalwila",
    name: "Kohalwila Branch",
    address: "Koahalwila Rd, Ataheraliyagahamula, Kelaniya",
    phones: ["0112 269 858"],
    hours: "Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/koholwila.png",
    mapLink: "https://maps.app.goo.gl/qX325ZMtCAX84Ve7A?g_st=ipc",
  },
  {
    id: "mavaramandiya",
    name: "Mavaramandiya Branch",
    address: "Delgoda Rd, Mawaramandiya, Siyambalape",
    phones: ["0112 927 837"],
    hours: "Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/mawaramandiya.png",
    mapLink: "https://maps.app.goo.gl/vkvMUnqYCWgq3DjN7",
  },
  {
    id: "kadawatha",
    name: "Kadawatha Branch",
    address:
      "Ganemulla Rd, Ihalakaragahamuna, Kadawatha (Near Ekasath Mawatha)",
    phones: ["0112 902 420"],
    hours: "Mon-Sat: 6:30 AM - 5:30 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/kadawatha.png",
    mapLink: "https://maps.app.goo.gl/oQS1LJjkTg666nqS6?g_st=ipc",
  },
  {
    id: "hunupitiya",
    name: "Hunupitiya Branch",
    address: "Temple Junction, Dalupitiya Rd, Hunupitiya",
    phones: ["0112 983 198"],
    hours: "Mon-Sat: 6:30 AM - 6:30 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/hunupitiya.png",
    mapLink: "https://maps.app.goo.gl/DWCx64NiXZN6d2EC6?g_st=ipc",
  },
  {
    id: "sapugaskanda",
    name: "Sapugaskanda Branch",
    address: "Makola Rd, Sapugaskanda",
    phones: ["0113 682 681"],
    hours: "Mon-Sat: 6:30 AM - 6:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/sapugaskanda.png",
    mapLink: "https://maps.app.goo.gl/VXiqgxnUGDMAR3Qg8",
  },
  {
    id: "thorana",
    name: "Thorana Junction Branch",
    address: "Waragoda Rd, Thorana Junction, Kelaniya",
    phones: ["0112 908 261"],
    hours: "Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed",
    services: ["Sample Collection", "ECG"],
    image: "/assets/branches/thorana j.png",
    mapLink: "https://maps.app.goo.gl/VqjtyTdUM2fkSz3D8",
  },
];

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<
    (typeof branches)[0] | null
  >(null);

  const handleCall = () => {
    window.location.href = "tel:+94718227704";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {!selectedBranch ? (
            /* HUB VIEW */
            <motion.div
              key="common"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-4 text-slate-900">
                  Our Branches
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                  Access world-class diagnostic services across our network of 9
                  specialized locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    className="group bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-[var(--primary)]/20 transition-all flex flex-col h-full"
                  >
                    <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={branch.image}
                        alt={branch.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* <div className="size-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Building2 size={24} />
                    </div> */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {branch.name}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-8">
                      {branch.address}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[var(--primary)] font-bold text-sm">
                      <div className="bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-2 rounded-full">
                        <a
                          href={`tel:${branch.phones[0].replace(/\s+/g, "")}`}
                          className="flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          {branch.phones[0]}
                        </a>
                      </div>
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedBranch(branch);
                        }}
                        className="bg-[var(--primary)]/10 text-[var(--primary)] px-4 py-2 rounded-full  font-bold flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        More
                        <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* BRANCH DETAIL VIEW - NEW LAYOUT */
            <motion.div
              key={selectedBranch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedBranch(null)}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-[var(--primary)] font-bold text-sm transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Locations
              </button>

              {/* HERO SECTION */}
              <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
                {/* Left content */}
                <div className="flex flex-col justify-center rounded-[2rem] bg-white border border-slate-200 p-8 lg:p-10 shadow-sm">
                  <span className="inline-flex w-fit items-center rounded-full bg-[var(--primary)]/10 px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-5">
                    Branch Details
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-5">
                    {selectedBranch.name}
                  </h1>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative size-10 shrink-0">
                      <Image
                        src="/icon-02.svg"
                        alt="Location"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
                        {selectedBranch.address}
                      </p>
                      <a
                        href={selectedBranch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:underline"
                      >
                        View on Map
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                    Visit {selectedBranch.name} for trusted medical laboratory
                    services, convenient access, and professional care in a
                    comfortable environment.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <button
                      onClick={handleCall}
                      className="px-8 py-4 bg-[var(--primary)] text-white font-black rounded-2xl shadow-lg hover:opacity-90 transition-all"
                    >
                      Book Appointment
                    </button>

                    <a
                      href={selectedBranch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border border-slate-300 text-slate-800 font-bold rounded-2xl hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Right image */}
                <div className="relative min-h-[320px] lg:min-h-[520px] rounded-[2rem] overflow-hidden shadow-xl group">
                  <Image
                    src={selectedBranch.image}
                    alt={selectedBranch.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white text-2xl md:text-3xl font-black drop-shadow-lg">
                      {selectedBranch.name}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      Modern diagnostic care
                    </p>
                  </div>
                </div>
              </section>

              {/* QUICK INFO STRIP */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-[1.75rem] bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                    Contact
                  </p>
                  <div className="space-y-3">
                    {selectedBranch.phones.map((p) => (
                      <div key={p} className="flex items-center gap-3">
                        <div className="relative size-8 shrink-0">
                          <Image
                            src="/icon-01.svg"
                            alt="Phone"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="font-bold text-slate-800">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                    Service Hours
                  </p>
                  <div className="flex items-start gap-3">
                    <div className="relative size-8 shrink-0">
                      <Image
                        src="/icon-04.svg"
                        alt="Hours"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium text-slate-700 leading-relaxed">
                      {selectedBranch.hours}
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.75rem] bg-white border border-slate-200 p-6 shadow-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                    Location Access
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Easily find this branch and get directions instantly using
                    Google Maps.
                  </p>
                  <a
                    href={selectedBranch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:underline"
                  >
                    Open Map
                    <ExternalLink size={14} />
                  </a>
                </div>
              </section>

              {/* MAIN CONTENT */}
              <section className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-8">
                {/* Services */}
                <div className="rounded-[2rem] bg-white border border-slate-200 p-8 lg:p-10 shadow-sm">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-2">
                        Services
                      </p>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                        Available at this branch
                      </h2>
                    </div>
                    
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedBranch.services.map((s) => (
                      <div
                        key={s}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 px-5 py-4 hover:border-[var(--primary)]/40 hover:bg-slate-50 transition-all"
                      >
                        <div className="size-3 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] shrink-0" />
                        <p className="font-bold text-slate-700">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sticky contact card */}
                <div className="xl:sticky xl:top-24 h-fit rounded-[2rem] bg-slate-900 text-white p-8 shadow-xl">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/60 mb-3">
                    Book Now
                  </p>
                  <h3 className="text-2xl font-black mb-4">
                    Need an appointment at {selectedBranch.name}?
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    Call the branch directly and our team will help you with
                    bookings, available services, and directions.
                  </p>

                  <div className="space-y-3 mb-6">
                    {selectedBranch.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className="block rounded-2xl bg-white/10 border border-white/10 px-4 py-3 font-bold hover:bg-white/20 transition-all"
                      >
                        {p}
                      </a>
                    ))}
                  </div>

                                {/* <button
                      onClick={handleCall}
                      className="w-full px-6 py-4 bg-[var(--primary)] text-white font-black rounded-2xl hover:opacity-90 transition-all"
                    >
                      BOOK AN APPOINTMENT
                    </button> */}
                </div>
              </section>

              {/* OTHER BRANCHES */}
              <section className="pt-4">
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                      Explore More
                    </p>
                    <h3 className="text-2xl font-black text-slate-900">
                      Other Branches
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                  {branches
                    .filter((b) => b.id !== selectedBranch.id)
                    .map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          setSelectedBranch(b) ; 
                          scrollTo({ top: 0, behavior: "smooth" });
                          
                        }
                      }
                      
                        className="group overflow-hidden rounded-[1.75rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left"
                        >
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={b.image}
                            alt={b.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <p className="text-base font-black text-slate-900 mb-2 line-clamp-2">
                            {b.name}
                          </p>
                          <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                            {b.address}
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                            View Branch
                            <ArrowLeft size={14} className="rotate-180" />
                          </span>
                        </div>
                      </button>

                    ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
