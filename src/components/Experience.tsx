import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "CAD Engineer",
    company: "Swathi BuildTech pvt.",
    location: "Patancheru, Hyderabad",
    period: "Feb 2026 – Present",
    type: "Full-time",
    description:
      "Results-driven CAD Engineer with expertise in creating optimized structural designs and mechanical components using AutoCAD and Creo. Proven track record in developing technical drawings for Pre-Engineered Buildings (PEBs), collaborating across teams, and managing project budgets to ensure on-time, cost-effective delivery.",
    achievements: [
      "Analyzing project quotes and developing optimized structural designs for PEBs and heavy steel structures without compromising safety standards",
      "Preparing detailed design drawings, structural reports, and Technical Material Lists (TMLs) for consultants and clients.",
      "Collaborating with Sales, Production, and Erection teams to ensure seamless transition from design to site installation.",
      "Overseeing site activities to ensure adherence to quality standards and national/international building codes.",
      "Identifying deviations in project scope and implementing cost-reduction measures to stay within budget"
    ],
    tech: ["AutoCAD", "PTC Creo", "SolidWorks"],
  },
  {
    role: "CAD Engineer",
    company: " Sri Laxmi Enterprises ",
    location: "Hanumakonda, Warangal",
    period: "Apr 2023 – Mar 2025",
    type: "Full-time",
    description:
      "Optimizing components using AutoCAD, PTC Creo, and SolidWorks.Boosted production efficiency by 30% and cut design iterations by 20% through precise 3D modeling and GD&T integration.",
    achievements: [
      "Migrating and detailing associated 2D manufacturing drawings, ensuring all annotations, GD&T (Geometric Dimensioning & Tolerancing) symbols, and Bill of Materials (BOM) are correctly generated and linked to the new 3D models.",
      "Collaborated with engineering and manufacturing teams to reduce design iterations by 20%, enhancing product quality and accuracy.",
      "Conducted thorough measurements and analysis on 20+ projects, achieving 98% compliance with functional and production specifications.",
    ],
    tech: ["AutoCAD", "PTC Creo", "SolidWorks"],
  },
  {
    role: "Junior CAD Engineer",
    company: "Anantharama Pvt.",
    location: "Hanumakonda, Warangal",
    period: "Apr 2020 – Mar 2023",
    type: "Full-time",
    description:
      "Creating 2D and 3D models for engineering projects, meeting industry standards and specs.",
    achievements: [
      "Enhanced CAD drafting skills through regular training programs.",
      "Collaborated with cross-functional teams on 10 major equipment designs, driving project success.",
      "Optimized CAD software, reducing design rendering and modeling time by 20%.",
      "Supported senior designers in product redesigns, improving product aesthetics and user experience.",
    ],
    tech: ["AutoCAD", "MS Excel"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            A track record of delivering high-impact solutions across startups and
            enterprise organizations.
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl p-6 sm:p-8 card-hover relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-10 hidden h-4 w-4 -translate-x-[9px] items-center justify-center sm:flex">
                <div className="h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-surface" />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <Briefcase size={18} className="text-indigo-400" />
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                  </div>
                  <p className="mb-3 text-lg text-indigo-300">{exp.company}</p>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-300">
                      {exp.type}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>

                  <ul className="mb-4 space-y-2">
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-light bg-surface-light px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-indigo-500/30 hover:text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
