import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "https://codeashion.com/" },
  { label: "About", to: "/about" },
  { 
    label: "Services", 
    href: "https://codeashion.com/#services", 
    hasDropdown: true,
    dropdown: [
      { label: "App Development", href: "https://codeashion.com/app-development" },
      { label: "Web Development", href: "https://codeashion.com/web-development" },
      { label: "Software Development", href: "https://codeashion.com/software-development" },
      { label: "UI/UX Design", href: "https://codeashion.com/ui-ux-design" },
      { label: "Backend & API Development", href: "https://codeashion.com/backend-api-development" },
    ]
  },
  { label: "Technologies", to: "/technologies" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-white shadow-sm" : ""}`} 
      style={!isScrolled ? { background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 50%, #162a4a 100%)" } : undefined}
    >
      <div className="mx-auto flex h-22 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="https://codeashion.com/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md"
        >
          <img
            src="/codeashion.svg"
            alt="Codeashion"
            className={`transition-all duration-300 ${isScrolled ? "bg-[#1c2a41] p-1.5 rounded-xl h-10 w-10" : "h-8 w-8"}`}
          />
          <span className={`text-[20px] font-semibold tracking-tight transition-colors ${isScrolled ? "text-[#1c2a41]" : "text-white"}`}>
            Codeashion
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="group relative">
              {item.to ? (
                <Link
                  to={item.to}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-4 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${isScrolled ? "text-slate-600 hover:text-teal-600" : "text-gray-300 hover:text-white"}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown aria-hidden="true" className="size-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-4 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${isScrolled ? "text-slate-600 hover:text-teal-600" : "text-gray-300 hover:text-white"}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown aria-hidden="true" className="size-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                  )}
                </a>
              )}
              {item.hasDropdown && item.dropdown && (
                <div className="absolute left-0 top-[100%] z-50 w-64 pt-2 opacity-0 invisible translate-y-2 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5">
                    <div className="flex flex-col">
                      {item.dropdown.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className="rounded-lg px-4 py-2.5 text-[15px] font-medium text-[#1e293b] transition-colors hover:bg-gray-100 hover:text-teal-600"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-teal-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1f3d]"
          >
            Get Free Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-white/10 px-4 pb-4 pt-2 lg:hidden"
          style={{ background: "linear-gradient(180deg, #0f1f3d 0%, #0a1628 100%)" }}
        >
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 rounded-md px-3 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown aria-hidden="true" className="size-3.5 opacity-60" />
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-1.5 rounded-md px-3 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown aria-hidden="true" className="size-3.5 opacity-60" />
                    )}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-3">
              <a
                href="https://codeashion.com/#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-400"
              >
                Get Free Consultation
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
