'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "How do I book a home collection?",
    answer: "You can book a home collection through our website, mobile app, or by calling our toll-free number. Simply select your tests, choose a convenient time slot, and our certified phlebotomist will visit your home."
  },
  {
    question: "When will I receive my reports?",
    answer: "Most routine test reports are delivered within 6-12 hours. Specialized tests may take 24-48 hours. You will receive an SMS and email notification once your report is ready for download."
  },
  {
    question: "Do I need to fast before my blood test?",
    answer: "Fasting requirements vary by test. For example, a Lipid Profile or Blood Sugar Fasting test requires 10-12 hours of fasting. Please check the specific test instructions in our directory or ask our support team."
  },
  {
    question: "How can I download my reports online?",
    answer: "Visit the 'Download Reports' section on our homepage, enter your Lab ID and registered mobile number, and verify with the OTP sent to your phone to access your digital reports."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white pt-24 lg:pt-28">
      {/* Hero / Contact Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Get in <span className="text-blue-600">Touch</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg">
                Have questions about a test or need assistance with your
                booking? Our team is here to help you 24/7.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Contact Items */}
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <a href="tel:+94718227704" className="text-blue-600 font-bold text-sm hover:underline">
                      +94 71 822 7704
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <a href="mailto:info@alphamedilab.lk" className="text-sm text-slate-600 font-medium hover:text-blue-600">
                      info@alphamedilab.lk
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <a
                      href="https://www.google.com/maps/place/Alpha+Medi+Lab/@6.9714668,79.9165437,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae259d2889218d7%3A0xc49b777a83424a9e!2sAlpha%20Medi%20Lab!5e0!3m2!1sen!2slk!4v1741252110292!5m2!1sen!2slk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-slate-600 leading-relaxed hover:text-blue-600"
                    >
                      <p>222/B Kandy Rd,</p>
                      <p>Kelaniya 11300,</p>
                      <p>Sri Lanka</p>
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                    <p className="text-sm text-slate-600">Monday - Saturday:</p>
                    <p className="text-sm text-slate-600 font-medium">7am - 9pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10">
              <h3 className="text-2xl font-black text-slate-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all"
                      placeholder="+94 7X XXX XXXX"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Test Booking</option>
                    <option>Report Issue</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:bg-white transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.53610214695!2d79.91494517587574!3d6.94590301811566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259d2889218d7%3A0xc49b777a83424a9e!2sAlpha%20Medi%20Lab!5e0!3m2!1sen!2slk!4v1741252110292!5m2!1sen!2slk"
              className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 max-w-md mx-auto">
              Everything you need to know about our services and procedures.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 opacity-10 -rotate-12 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <MessageSquare size={300} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-6">Need immediate assistance?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Our live chat support is available 24/7 to answer your queries and help with bookings.
              </p>
              <button className="px-10 py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
                <MessageSquare size={20} />
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}