import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CheckCircle2 } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "We start by understanding your vision, goals, and target audience to define a clear roadmap.",
    deliverables: ["Project requirements", "Wireframes", "Timeline", "Architecture plan"],
    image: "/s1.jpg"
  },
  {
    id: "02",
    title: "Design & Prototyping",
    desc: "Creating intuitive, engaging user experiences and visual designs that align with your brand identity.",
    deliverables: ["UI/UX design", "Interactive prototype", "Design system"],
    image: "/s2.jpg"
  },
  {
    id: "03",
    title: "Development",
    desc: "Our engineering team brings the designs to life using modern, scalable technologies.",
    deliverables: ["Frontend & backend dev", "API integration", "Regular updates"],
    image: "/s3.svg"
  },
  {
    id: "04",
    title: "Testing & QA",
    desc: "Rigorous testing across multiple devices and browsers ensures a bug-free, seamless experience.",
    deliverables: ["Automated tests", "Manual QA", "Performance optimization"],
    image: "/s4.jpg"
  },
  {
    id: "05",
    title: "Deployment & Launch",
    desc: "We handle the entire deployment process, ensuring a smooth transition to the live environment.",
    deliverables: ["Server setup", "App store submission", "Production deployment"],
    image: "/s1.jpg"
  },
  {
    id: "06",
    title: "Support & Maintenance",
    desc: "Our partnership doesn't end at launch. We provide ongoing support to keep your software secure and up-to-date.",
    deliverables: ["Bug fixes", "Feature updates", "Performance monitoring"],
    image: "/s6.jpg"
  }
];

const FEATURES = [
  {
    title: "Agile Methodology",
    desc: "Iterative approach allowing for flexibility and continuous improvement throughout the project lifecycle."
  },
  {
    title: "Transparency",
    desc: "Regular communication and clear visibility into project progress, timelines, and budgets."
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality standards and rigorous testing to ensure your software is robust and reliable."
  }
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans selection:bg-teal-100 selection:text-teal-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-6">
          OUR PROCESS
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-[#1c2a41] leading-[1.15] mb-8 tracking-tight">
          How We Deliver Excellence
        </h1>
        <p className="text-[17px] leading-relaxed text-slate-500 max-w-2xl mx-auto mb-12">
          A proven, transparent process ensures we deliver high-quality software solutions on time and within budget.
        </p>
      </section>

      {/* Process Steps */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-24 sm:space-y-32">
        {PROCESS_STEPS.map((step, idx) => (
          <div 
            key={step.id} 
            className={`flex flex-col gap-10 md:gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          >
            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  {step.id}
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1c2a41]">
                {step.title}
              </h2>
              <p className="text-[16px] text-slate-500 leading-relaxed">
                {step.desc}
              </p>
              
              <div className="pt-4">
                <h4 className="text-sm font-bold text-[#1c2a41] mb-4 uppercase tracking-wide">Key Deliverables</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {step.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="rounded-3xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-12">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-auto object-contain max-h-[300px]"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Our Process Section */}
      <section className="bg-slate-100/50 py-24 border-y border-slate-200/60">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-4">
              WHY CHOOSE OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2a41] tracking-tight">
              We are committed to delivering the best results for your business.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold text-[#1c2a41] mb-4">{feature.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
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
