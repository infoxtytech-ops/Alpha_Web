"use client";
import Image from 'next/image';

import '../globals.css';

import { Tag } from 'lucide-react';
import { motion } from 'motion/react';

// const offers = [
//   {
//     id: 1,
//     label: 'Limited Time',
//     title: 'Family Health Saver',
//     description:
//       'Up to 20% off when 3 or more family members book any health package together.',
//     highlight: 'Best for families planning annual checkups.',
//     badgeColor: 'blue',
//     validTill: 'Valid until 30 June 2026',
//   },
//   {
//     id: 2,
//     label: 'Student & Senior Offer',
//     title: 'Care for Every Stage',
//     description:
//       'Flat 15% discount for students and senior citizens on selected diagnostic packages.',
//     highlight: 'ID / age verification required at the time of booking.',
//     badgeColor: 'emerald',
//     validTill: 'Ongoing special offer',
//   },
//   {
//     id: 3,
//     label: 'Corporate & Industrial',
//     title: 'Workforce Wellness Program',
//     description:
//       'Customized pricing for companies booking periodic health screenings for teams.',
//     highlight: 'Ideal for food handlers, factories and office staff.',
//     badgeColor: 'purple',
//     validTill: 'Talk to our corporate desk',
//   },
//   {
//     id: 4,
//     label: 'Weekend Special',
//     title: 'Saturday Checkup Bonus',
//     description:
//       'Book any full body package on Saturday and get a free fasting blood sugar test for a companion.',
//     highlight: 'Perfect for busy professionals who prefer weekend slots.',
//     badgeColor: 'rose',
//     validTill: 'Every Saturday, subject to slot availability',
//   },
// ];

export default function OffersPage() {
  return (
    
    <div className="flex flex-col w-full min-h-screen bg-white text-slate-900">
        {/* Top Banner Offer */}
      <div className="bg-blue-50 py-3 px-4 text-center text-sm font-semibold text-[var(--primary)] border-b border-blue-100">
        Special offer:{" "}
        <span className="font-bold text-[var(--primary)]/80">
          10% discount for senior citizens and students
        </span>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-white py-16 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[var(--primary)] text-xs font-bold uppercase tracking-wider mb-6">
              <Tag size={14} />
              Current Offers & Promotions
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Special Offers for <span className="text-[var(--primary)]">Smarter Care</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Explore our latest promotions, seasonal discounts and special
              packages designed to make quality diagnostics more accessible.
            </p>

            {/* <p className="text-sm text-slate-500 max-w-xl mx-auto">
              These are sample offers for display purposes. Actual pricing and
              availability may vary. Please contact our team for confirmation
              before booking.
            </p> */}
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

      {/* Offers Grid */}
      {/* <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative bg-white rounded-3xl border border-slate-200 shadow-sm p-7 md:p-8 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase bg-${offer.badgeColor}-50 text-${offer.badgeColor}-600`}
                  >
                    <Percent size={14} />
                    {offer.label}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                    <Calendar size={14} />
                    {offer.validTill}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 mt-1">
                  {offer.title}
                </h2>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {offer.description}
                </p>

                <p className="text-xs md:text-sm font-semibold text-slate-500 bg-slate-50 rounded-2xl px-4 py-3">
                  {offer.highlight}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-white font-semibold text-[11px] uppercase tracking-widest">
                    <Gift size={14} />
                    Sample Offer
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                    <Users size={14} />
                    Call to confirm availability
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    Terms & conditions apply. Not to be used as final pricing
                    information.
                  </p>

                  <a href="tel:+94718227704" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700">
                    Call to Book
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section> */}

      {/* Offers Grid */}
{/* <section className="py-16 bg-slate-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        No Current Offers
      </h2>
      <p className="text-lg text-slate-600 max-w-xl mx-auto">
        We currently don&apos;t have any active promotions. Please check back soon for our latest offers and discounts.
      </p>
    </motion.div>
  </div>
</section> */}
  {/* Industrial Packages & Promotions */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           
          <div>
            <h2 className="text-3xl font-black text-center text-slate-900 mb-10">
              Special Promotions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border-l-4 border-l-[var(--primary)] shadow-md flex items-start gap-5 transition-transform hover:-translate-y-1">
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

              <div className="bg-white rounded-2xl p-8 border-l-4 border-l-[var(--primary)] shadow-md flex items-start gap-5 transition-transform hover:-translate-y-1">
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
      
    </div>
  );
}
