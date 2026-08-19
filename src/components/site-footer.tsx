import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#1c2a41] text-white pt-24 pb-8 relative">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        
        {/* Floating CTA Card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl rounded-2xl bg-gradient-to-r from-[#172338] to-[#1e2e48] p-8 md:p-12 shadow-2xl border border-white/5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Partner with Codeashion Technologies to create scalable digital solutions that drive real business growth and operational efficiency.
          </p>
          <a
            href="https://codeashion.com/#services"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-teal-400 hover:shadow-lg"
          >
            View All Services →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 pt-12 border-t border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6">
              <img src="/codeashion.svg" alt="Codeashion" className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight">Codeashion</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
              Codeashion Technologies is a leading software development company dedicated to crafting innovative digital solutions. We transform ideas into impactful realities for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/codeashion-technologies" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg">
                <Linkedin className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg">
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="https://codeashion.com/about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="https://codeashion.com/#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="http://codeashion.com/portfolio" className="hover:text-teal-400 transition-colors">Portfolio & Projects</a></li>
              <li><a href="https://codeashion.com/careers" className="hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="https://codeashion.com/contact" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Contacts</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="size-5 shrink-0 text-teal-400 mt-0.5" />
                <a href="mailto:info@codeashion.com" className="hover:text-white transition-colors">info@codeashion.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 text-teal-400 mt-0.5" />
                <a href="tel:+919106093836" className="hover:text-white transition-colors">+91 91060 93836</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-teal-400 mt-0.5" />
                <span>Surat, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Codeashion Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
