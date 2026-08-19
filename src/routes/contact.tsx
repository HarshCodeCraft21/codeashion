import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Send, MapPin, Mail, Phone, Clock, Linkedin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Codeashion Technologies" },
      { name: "description", content: "Have a project in mind? We'd love to hear about it. Get in touch with us for a free consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans selection:bg-teal-100 selection:text-teal-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-6">
          CONTACT US
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-[#1c2a41] leading-[1.15] mb-8 tracking-tight">
          Let's Build Something Great Together
        </h1>
        <p className="text-[17px] leading-relaxed text-slate-500 max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear about it. Get in touch with us for a free consultation.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h2 className="text-2xl font-bold text-[#1c2a41] mb-8">Send Us a Message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-[#1c2a41]">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="fullName" 
                      placeholder="Hello ABC" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1c2a41]">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="codeashion@gmail.com" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#1c2a41]">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+91 98765 43210" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors text-sm"
                    />
                  </div>
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-[#1c2a41]">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Code Ashion" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-[#1c2a41]">
                    How can we help you? *
                  </label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors text-sm text-slate-600 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="app">App Development</option>
                    <option value="web">Web Development</option>
                    <option value="software">Software Development</option>
                    <option value="uiux">UI/UX Design</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label htmlFor="details" className="block text-sm font-semibold text-[#1c2a41]">
                    Project Details *
                  </label>
                  <textarea 
                    id="details" 
                    rows={4}
                    placeholder="Tell us about your project..." 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold py-4 rounded-xl transition-colors shadow-sm"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#1c2a41] mb-4">Get in Touch</h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
              Whether you have a project in mind or just want to explore possibilities, we're here to help. Reach out and let's start a conversation.
            </p>

            <div className="space-y-8">
              {/* Office Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1c2a41] mb-1">Office Address</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-1">Surat, Gujarat, India</p>
                  <a href="#" className="text-sm text-teal-500 font-medium hover:underline">View on Google Maps →</a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1c2a41] mb-1">Email Us</h4>
                  <a href="mailto:codeashion@gmail.com" className="text-[15px] text-teal-500 font-medium hover:underline block mb-1">codeashion@gmail.com</a>
                  <p className="text-sm text-slate-500">We'll respond within 24 hours.</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1c2a41] mb-1">Call Us</h4>
                  <p className="text-[15px] text-slate-600 mb-1">+91 90334 03007 / +91 90334 43007</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#1c2a41] mb-1">Working Hours</h4>
                  <p className="text-sm text-slate-500 mb-1">Monday - Friday</p>
                  <p className="text-sm text-slate-500">(10:00 AM to 7:00 PM IST)</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="mt-12">
              <h4 className="text-[13px] font-bold text-[#1c2a41] uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/company/codeashion" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-500 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-500 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-32 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10">
        <div className="w-full h-[400px] bg-slate-100 rounded-3xl flex flex-col items-center justify-center text-center p-6 border border-slate-200">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
            <MapPin className="w-7 h-7 text-[#1c2a41]" />
          </div>
          <h3 className="text-xl font-bold text-[#1c2a41] mb-2">Surat, Gujarat, India</h3>
          <p className="text-sm text-slate-500 max-w-sm">
            This is a placeholder map. You can easily embed a real Google Maps iframe here using your Google Cloud API key.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
