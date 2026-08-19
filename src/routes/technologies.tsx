import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies We Work With — Codeashion Technologies" },
      { name: "description", content: "Explore the cutting-edge technologies, frameworks, and tools we use to build robust and scalable digital solutions." },
    ],
  }),
  component: TechnologiesPage,
});

const TECH_STACK = [
  {
    category: "Frontend Development",
    subtitle: "Building responsive and interactive user interfaces.",
    items: [
      { name: "React", desc: "Component-based UI library for dynamic web apps." },
      { name: "Vue.js", desc: "Progressive framework for building user interfaces." },
      { name: "Next.js", desc: "React framework for production-grade applications." },
      { name: "Angular", desc: "Platform for building mobile and desktop web apps." },
      { name: "TypeScript", desc: "Typed superset of JavaScript for robust code." },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development." },
    ]
  },
  {
    category: "Backend Development",
    subtitle: "Robust and scalable server-side solutions and APIs.",
    items: [
      { name: "Node.js", desc: "JavaScript runtime built on Chrome's V8 engine." },
      { name: "Python", desc: "Versatile language for backend systems and data processing." },
      { name: "Java", desc: "Object-oriented programming language for enterprise solutions." },
      { name: "Go", desc: "Efficient, concurrent programming language for high-performance services." },
      { name: "PHP", desc: "Widely-used open source general-purpose scripting language." },
      { name: ".NET", desc: "Developer platform for building many different types of applications." },
    ]
  },
  {
    category: "Mobile Development",
    subtitle: "Cross-platform and native solutions for iOS and Android.",
    items: [
      { name: "React Native", desc: "Create native apps for Android and iOS using React." },
      { name: "Flutter", desc: "UI toolkit for building natively compiled applications." },
      { name: "Swift", desc: "Powerful and intuitive programming language for iOS." },
      { name: "Kotlin", desc: "Modern programming language that makes developers happier." },
    ]
  },
  {
    category: "Database & Storage",
    subtitle: "Secure and scalable data management solutions.",
    items: [
      { name: "MongoDB", desc: "Document-based, distributed database built for modern applications." },
      { name: "PostgreSQL", desc: "Advanced open source relational database system." },
      { name: "Redis", desc: "In-memory data structure store, used as a database, cache, and message broker." },
      { name: "MySQL", desc: "The world's most popular open source relational database." },
      { name: "Firebase", desc: "App development platform that helps you build and grow apps and games you love." },
    ]
  },
  {
    category: "Cloud & DevOps",
    subtitle: "Cloud infrastructure and continuous integration pipelines.",
    items: [
      { name: "AWS", desc: "Comprehensive, evolving cloud computing platform." },
      { name: "Google Cloud", desc: "Suite of cloud computing services offered by Google." },
      { name: "Docker", desc: "Platform designed to help developers build, share, and run modern applications." },
      { name: "Jenkins", desc: "Open source automation server." },
      { name: "Kubernetes", desc: "Automated container deployment, scaling, and management." },
      { name: "CI/CD", desc: "Continuous integration and continuous delivery." },
    ]
  },
  {
    category: "Tools & Design",
    subtitle: "Design, version control, and team collaboration workflows.",
    items: [
      { name: "Figma", desc: "Collaborative interface design tool." },
      { name: "Git", desc: "Distributed version control system." },
      { name: "Jira", desc: "Project and issue tracking software." },
      { name: "Slack", desc: "Communication platform for teams." },
      { name: "Notion", desc: "All-in-one workspace for notes and tasks." },
    ]
  }
];

function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans selection:bg-teal-100 selection:text-teal-900">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-500 mb-6">
          TECHNOLOGIES
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-[#1c2a41] leading-[1.15] mb-8 tracking-tight">
          Technologies We Work With
        </h1>
        <p className="text-[17px] leading-relaxed text-slate-500 max-w-3xl mx-auto">
          We leverage the latest technologies and frameworks to build robust, scalable, and high-performance applications that drive business success.
        </p>
      </section>

      {/* Tech Stack Categories */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24">
        {TECH_STACK.map((category, idx) => (
          <div key={idx} className="space-y-12">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1c2a41] tracking-tight mb-3">
                {category.category}
              </h2>
              <p className="text-sm sm:text-[15px] text-slate-500">
                {category.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {category.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-center"
                >
                  <h3 className="text-lg font-bold text-[#1c2a41] mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-[#1c2a41] px-4 py-24 sm:px-6 lg:px-8 text-center border-b border-white/10 pb-48">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-[16px] text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Our team is ready to turn your ideas into a successful digital product. Let's discuss how we can help with your next project.
          </p>
          <a
            href="https://codeashion.com/#contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-teal-400 hover:shadow-md"
          >
            Start Project →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
