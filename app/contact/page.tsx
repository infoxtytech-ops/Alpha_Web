"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Send, ChevronDown } from "lucide-react";

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Form submission error:', errorMessage);
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
          </div>

          {/* Map Section - Right Column */}
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.53610214695!2d79.91494517587574!3d6.94590301811566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259d2889218d7%3A0xc49b777a83424a9e!2sAlpha%20Medi%20Lab!5e0!3m2!1sen!2slk!4v1741252110292!5m2!1sen!2slk"
              className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/94718227704"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-[var(--primary)]/30 hover:shadow-xl hover:shadow-[var(--primary)]/40 transition-all duration-300 hover:-translate-y-1"
          >
            {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.998 1.515c-1.592.905-2.893 2.29-3.648 3.803-.756 1.513-.982 3.124-.75 4.759.232 1.635 1.02 3.206 2.206 4.407 1.185 1.202 2.775 1.989 4.425 2.207 1.65.218 3.311-.013 4.769-.756 1.458-.743 2.694-1.895 3.49-3.335.796-1.44 1.104-3.04.934-4.637-.17-1.596-.887-3.139-2.02-4.36-1.133-1.221-2.693-1.98-4.404-2.158zm0 0" />
            </svg> */}
            Chat on WhatsApp
          </a>
        </div>

       
      </div>
    </section>
  );
}
