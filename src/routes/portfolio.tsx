import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Codeashion Technologies" },
      { name: "description", content: "Explore our successful projects and case studies across various industries." },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  {
    category: "Web Development",
    title: "E-Commerce Platform",
    desc: "A fully-featured e-commerce platform with inventory management, payment processing, and real-time dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/e-commerse.svg"
  },
  {
    category: "App Development",
    title: "Healthcare Mobile App",
    desc: "Patient management app with appointment scheduling, telemedicine features, and health tracking.",
    tags: ["React Native", "Firebase", "Node.js"],
    image: "/healthcare.svg"
  },
  {
    category: "Software Development",
    title: "FinTech Dashboard",
    desc: "Real-time financial analytics dashboard with automated reporting and data visualization.",
    tags: ["Vue.js", "Python", "PostgreSQL", "AWS"],
    image: "/fintech.svg"
  },
  {
    category: "App Development",
    title: "Food Delivery App",
    desc: "Multi-vendor food delivery application with real-time tracking and integrated payments.",
    tags: ["Flutter", "Node.js", "Redis", "Google Maps API"],
    image: "/food-delivery.svg"
  },
  {
    category: "Web Development",
    title: "Real Estate Portal",
    desc: "Property listing and management platform with virtual tours and lead management.",
    tags: ["Next.js", "Node.js/AWS", "MySQL"],
    image: "/real-estate.svg"
  },
  {
    category: "Software Development",
    title: "Logistics Management System",
    desc: "End-to-end logistics platform with fleet tracking, route optimization, and delivery management.",
    tags: ["React", "Java", "Spring Boot", "Redis"],
    image: "/logistic.svg"
  }
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans selection:bg-teal-100 selection:text-teal-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-6">
          OUR WORK
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-[#1c2a41] leading-[1.15] mb-8 tracking-tight">
          Portfolio & Case Studies
        </h1>
        <p className="text-[17px] leading-relaxed text-slate-500 max-w-3xl mx-auto mb-12">
          Explore our successful projects and see how we've helped businesses across industries achieve their digital transformation goals.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#1c2a41] text-white shadow-sm hover:bg-[#253755] transition-colors">
            All
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            Web Development
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            App Development
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            Software Development
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              {/* Image Container */}
              <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-100">
                <div className="rounded-2xl overflow-hidden shadow-sm relative pt-[60%] bg-[#e2e8f0]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 sm:p-10">
                <span className="text-xs font-bold text-teal-500 uppercase tracking-wider block mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-[#1c2a41] mb-4">
                  {project.title}
                </h3>
                <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                  {project.desc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-[#162135] px-4 py-24 sm:px-6 lg:px-8 text-center pb-48">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-[16px] text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life. Your success story could be next.
          </p>
          <a
            href="https://codeashion.com/#contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-teal-400 hover:shadow-md"
          >
            Get Free Consultation →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
