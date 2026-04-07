import Link from "next/link";
import { RiTiktokLine } from "react-icons/ri";
import Image from "next/image";
import {
  
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="w-[220px]">
              <Image
                src="/alphalogon1.png"
                alt="Alpha Medi Lab Logo"
                width={220}
                height={50}
                className="object-contain"
              />
            </div>
            {/* <span className="text-xl font-bold">Alpha Medi Lab</span> */}

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading the way in medical diagnostics with cutting-edge
              technology and a commitment to patient care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/alphamedilabgampaha/"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/alphamedilabsl/?hl=en"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@AlphaMediLab"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/alphamedilab/?viewAsMember=true"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@alphamedilab?is_from_webapp=1&sender_device=pc"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <RiTiktokLine size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/branches"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Find a Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Health Packages
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/branches"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Branches
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Careers
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="/services#hematology"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Hematology
                </a>
              </li>
              <li>
                <a
                  href="/services#chemical-pathology"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Chemical Pathology
                </a>
              </li>
              <li>
                <a
                  href="/services#hormone-tests"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Hormone Tests
                </a>
              </li>
              <li>
                <a
                  href="/services#doctor-channeling"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Doctor Channeling
                </a>
              </li>
              <li>
                <a
                  href="/services#animal-testing"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Animal Testing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <div className="relative size-5 shrink-0">
                  <Image
                    src="/icon-02.svg"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/Alpha+Medi+Lab/data=!4m2!3m1!1s0x0:0xdfeddca6ff602652?sa=X&ved=1t:2428&ictx=111"
                  className="flex items-center gap-2 text-slate-300 font-semibold text-sm hover:text-blue-400 transition-colors"
                >
                  <span>
                    222/B Kandy Rd,
                    <br />
                    Kelaniya 11300
                  </span>{" "}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="relative size-5 shrink-0">
                  <Image
                    src="/icon-01.svg"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </div>
                <a
                  href="tel:+94718227704"
                  className="flex items-center gap-2 text-slate-300 font-semibold text-sm hover:text-blue-400 transition-colors"
                >
                  <span>+94 71 822 7704</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="relative size-5 shrink-0">
                  <Image
                    src="/icon-03.svg"
                    alt="Location"
                    fill
                    className="object-contain"
                  />
                </div>
                <a
                  href="mailto:info@alphamedilab.lk"
                  className="flex items-center gap-2 text-slate-300 font-semibold text-sm hover:text-blue-400 transition-colors"
                >
                  <span>info@alphamedilab.lk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Alpha Medi Lab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
