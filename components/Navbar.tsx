"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    // { name: "Offers", href: "/offers" },
    { name: "Branches", href: "/branches" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center">
              <Image
                src="/alphalogon1.png"
                alt="Alpha Medi Lab Logo"
                width={280}
                height={50}
                className="object-contain"
              />
            </div>
            {/* <div className="flex flex-col leading-tight">
              <h1 className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                Alpha <span className="text-blue-600">Medi</span>
              </h1>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Laboratory
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors ${
                  isActiveLink(link.href)
                    ? "text-[var(--accent)]"
                    : "text-slate-600 hover:text-[var(--accent)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone */}
              <a
                href="tel:+94718227704"
                className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"
              >
                
                <button className="px-8 py-3 text-sm font-bold text-black/80 rounded-full bg-[var(--primary)]/70 backdrop-blur flex items-center justify-center hover:bg-[var(--primary)]/60 transition-all">
                  Call Us: +94 71 822 7704
                </button>
              </a>

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

              {/* Email */}
              {/* <a
                href="mailto:info@alphamedilab.lk"
                className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--accent)]/40 transition-all"
              >
                <div className="relative size-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                  <Image
                    src="/icon-03.svg"
                    alt="Email"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Email
                  </span>
                  <span className="text-sm font-bold text-slate-800 group-hover:text-[var(--accent)] transition-colors">
                    info@alphamedilab.lk
                  </span>
                </div>
              </a> */}
            </div>
            {/* 
            <button className="hidden sm:flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95">
              Book a Test
            </button> */}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 text-base font-bold rounded-xl transition-all ${
                    isActiveLink(link.href)
                      ? "text-[var(--accent)] bg-[var(--accent)]/10"
                      : "text-slate-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-100">
                
                <a
                  href="tel:+94718227704"
                  className="flex items-center justify-center gap-2 w-full mb-2 text-[var(--primary)] font-bold py-2"
                >
                  <Phone size={18} /> +94 71 822 7704
                </a>
               
                <a
                  href="mailto:info@alphamedilab.lk"
                  className="flex items-center justify-center gap-2 w-full text-[var(--primary)] font-bold py-2"
                >
                  <Mail size={18} /> info@alphamedilab.lk
                </a>
                {/* <button className="w-full flex items-center justify-center bg-blue-600 text-white font-bold px-[27px] py-[13px] rounded-[9px] shadow-[3px_5px_0px_rgba(0,0,0,0.4)] -rotate-[0.7deg] hover:rotate-[0.3deg] hover:translate-y-[1px] transition">
                  Book a Test
                </button> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
