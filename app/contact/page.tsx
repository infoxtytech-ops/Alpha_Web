"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Mail, MapPin, Send } from "lucide-react";

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

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "General Inquiry",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-50 py-20 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <div className="flex flex-col h-full justify-start gap-8">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Have questions about a test or need assistance with your booking?
              Our team is here to help you 24/7.
            </p>

            {/* Contact Items */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Call */}
              <div className="flex gap-4 items-start">
                <div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/icon-01.svg"
                    alt="Call us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <a
                    href="tel:+94718227704"
                    className="text-sm text-slate-600 font-medium hover:text-[var(--primary)] transition-colors flex items-center gap-2"
                  >
                    +94 71 822 7704
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/icon-02.svg"
                    alt="Call us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <a
                    href="mailto:info@alphamedilab.lk"
                    className="text-sm text-slate-600 font-medium hover:text-[var(--primary)]"
                  >
                    info@alphamedilab.lk
                  </a>
                </div>
              </div>

              {/* Visit */}
              <div className="flex gap-4 items-start">
                <div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/icon-02.svg"
                    alt="Call us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                  <a
                    href="https://www.google.com/maps/place/Alpha+Medi+Lab/@6.9714668,79.9165437,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-slate-600 leading-relaxed hover:text-[var(--primary)]"
                  >
                    222/B Kandy Rd,
                    <br />
                    Kelaniya 11300,
                    <br />
                    Sri Lanka
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="relative size-12 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/icon-01.svg"
                    alt="Call us"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-sm text-slate-600">Monday - Saturday:</p>
                  <p className="text-sm text-slate-600 font-medium">7am - 9pm</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-slate-100 shadow-lg mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.53610214695!2d79.91494517587574!3d6.94590301811566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259d2889218d7%3A0xc49b777a83424a9e!2sAlpha%20Medi%20Lab!5e0!3m2!1sen!2slk!4v1741252110292!5m2!1sen!2slk"
                className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col h-full justify-start">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 h-full flex flex-col">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Send us a Message</h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 flex-1 flex flex-col"
              >
                {/* Form fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 7X XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Email & Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 focus:bg-white transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Test Booking</option>
                    <option>Report Issue</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2 flex-1 flex flex-col">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/10 focus:bg-white transition-all resize-none flex-1"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--primary)] text-white font-black rounded-xl hover:bg-[var(--primary)]/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-[var(--primary)]/20 flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>

                {submitStatus === "success" && (
                  <p className="text-sm text-emerald-600 font-medium mt-2">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-rose-600 font-medium mt-2">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-[var(--accent)/30 p-8 md:p-10">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-slate-500">
              Quick answers to common questions about bookings, reports and
              home collections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[var(--accent)]/20 transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
