import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Award, Briefcase, CheckCircle, ShieldCheck, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans selection:bg-teal-100 selection:text-teal-900">
      <SiteHeader />

      {/* 1. Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-6">
          HOME / ABOUT
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-[#1c2a41] leading-[1.15] mb-8 tracking-tight">
          Transforming Ideas Into Digital Reality
        </h1>
        <p className="text-[17px] leading-relaxed text-slate-500 max-w-3xl mx-auto">
          Codeashion Technologies is a premier software development company dedicated to
          helping businesses thrive in the digital age. We build innovative, scalable,
          and robust digital solutions.
        </p>
      </section>

      {/* 2. Why We Started */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-4">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2a41] tracking-tight">
            Why We Started Codeashion
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 text-[16px] leading-relaxed text-slate-500">
            <p>
              In a world where technology is constantly evolving, we saw a gap between
              innovative ideas and their successful execution. Many businesses struggle
              to find reliable technical partners who truly understand their vision and
              can bring it to life.
            </p>
            <p>
              We founded Codeashion with a clear purpose: to bridge this gap by delivering
              high-quality, custom digital solutions. We combine deep technical expertise
              with a user-centric approach to build software that not only works flawlessly
              but also drives measurable business growth.
            </p>
            <p className="font-medium text-[#1c2a41]">
              Our passion is turning complex challenges into simple, elegant digital experiences
              that empower our clients to lead in their industries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { num: "15+", label: "Projects Delivered" },
              { num: "10+", label: "Happy Clients" },
              { num: "5+", label: "Team Members" },
              { num: "3+", label: "Years Experience" }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-teal-500 mb-2">{stat.num}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-[#1c2a41] py-24 mt-12 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-teal-400 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-teal-400 blur-[120px]"></div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Mission */}
            <div className="bg-[#162135] rounded-3xl p-10 md:p-12 border border-white/5 shadow-2xl">
              <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20">
                <Target className="text-white size-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-[16px]">
                To empower businesses globally with innovative and robust digital solutions.
                We strive to deliver exceptional value by blending cutting-edge technologies
                with creative problem-solving, ensuring our clients achieve sustainable
                growth and competitive advantage in their respective markets.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#162135] rounded-3xl p-10 md:p-12 border border-white/5 shadow-2xl">
              <div className="w-14 h-14 bg-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20">
                <ShieldCheck className="text-white size-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-[16px]">
                To be globally recognized as a trusted digital transformation partner,
                known for our commitment to excellence, integrity, and relentless innovation.
                We envision a future where technology bridges human potential, creating
                seamless experiences that elevate businesses and societies alike.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Meet Our Founders */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-4">
            The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2a41] tracking-tight mb-4">
            Meet Our Founders
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            The visionary leaders driving Codeashion Technologies forward with passion and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Milan */}
          <div className="bg-white rounded-3xl p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 mb-6 overflow-hidden ring-4 ring-slate-50">
              <img src="/tarophoto.jpg" alt="Milan Maniya" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#1c2a41] mb-2">Milan Maniya</h3>
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wide mb-4">Co-Founder & CTO</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Leading the technological vision and ensuring architectural excellence across all engineering operations.
            </p>
          </div>

          {/* Harsh */}
          <div className="bg-white rounded-3xl p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 mb-6 overflow-hidden ring-4 ring-slate-50">
              <img src="/marophoto.png" alt="Harsh Sangani" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#1c2a41] mb-2">Harsh Sangani</h3>
            <p className="text-sm font-semibold text-teal-500 uppercase tracking-wide mb-4">Co-Founder & CEO</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Driving business strategy, operational growth, and fostering client relationships globally.
            </p>
          </div>
        </div>
      </section>

      {/* 5. What Drives Us Forward */}
      <section className="bg-slate-100/50 py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-4">
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2a41] tracking-tight">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Innovation", desc: "We constantly explore new technologies to deliver cutting-edge digital solutions." },
              { icon: Award, title: "Excellence", desc: "Quality is embedded in our DNA. We never settle for anything less than exceptional." },
              { icon: Users, title: "Collaboration", desc: "We work closely as a team and with our clients to ensure shared success." },
              { icon: ShieldCheck, title: "Integrity", desc: "Transparency, honesty, and ethical practices guide every decision we make." },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto bg-[#1c2a41] rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-white size-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1c2a41] mb-3">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Key Milestones */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2a41] tracking-tight">
            Key Milestones
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-teal-100"></div>

          <div className="space-y-16">
            {[
              { year: "2021", title: "Founded as Agency", desc: "Started our journey as a boutique software agency, taking on our first external client projects.", align: "left" },
              { year: "2022", title: "10+ Clients Acquired", desc: "Successfully delivered projects across multiple industries and grew our trusted client base.", align: "right" },
              { year: "2023", title: "Company Expanded", desc: "Moved into a larger office space and expanded our core engineering and design team.", align: "left" },
              { year: "2024", title: "Founders Incorporated", desc: "Officially incorporated as Codeashion Technologies, solidifying our corporate structure.", align: "right" },
              { year: "2025", title: "Expanded Services", desc: "Launched dedicated divisions for Enterprise SaaS development and Cloud infrastructure.", align: "left" },
              { year: "2026", title: "50+ Projects", desc: "Reached the milestone of 50 successful digital products delivered worldwide.", align: "right" },
            ].map((item, i) => (
              <div key={i} className={`relative flex items-center justify-between w-full ${item.align === 'left' ? 'flex-row-reverse' : ''}`}>
                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 ring-4 ring-white z-10 shadow-sm"></div>

                {/* Empty Space for the other side */}
                <div className="w-5/12"></div>

                {/* Content Card */}
                <div className={`w-5/12 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative ${item.align === 'left' ? 'text-right' : 'text-left'}`}>
                  {/* Small arrow pointing to center line */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-l border-slate-100 rotate-45 ${item.align === 'left' ? '-right-1.5 rotate-[135deg]' : '-left-1.5 rotate-[-45deg]'}`}></div>

                  <span className="text-sm font-bold text-teal-500 mb-2 block">{item.year}</span>
                  <h3 className="text-lg font-bold text-[#1c2a41] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ready to Work With Us */}
      <section className="bg-[#f8fafc] px-4 pt-24 pb-48 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1c2a41] tracking-tight mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-[16px] text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you are a startup looking for a tech partner or an enterprise needing a team of experts, we're ready to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://codeashion.com/#contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-teal-400 hover:shadow-md"
          >
            Start Project
          </a>
          <a
            href="https://codeashion.com/#services"
            className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3.5 text-[15px] font-semibold text-[#1c2a41] shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
