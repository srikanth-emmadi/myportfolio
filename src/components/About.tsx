import { motion } from "framer-motion";
import { Code2, Coffee, Globe, Rocket } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "20+" },
];

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end expertise from database design to pixel-perfect UIs. Specializing in React, Node.js, and TypeScript ecosystems.",
  },
  {
    icon: Globe,
    title: "System Architecture",
    description:
      "Designing scalable, resilient systems with microservices, cloud infrastructure (AWS/GCP), and event-driven architectures.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Obsessed with Core Web Vitals, bundle optimization, and delivering lightning-fast user experiences at scale.",
  },
  {
    icon: Coffee,
    title: "Team Leadership",
    description:
      "Mentored 10+ junior developers, led cross-functional teams, and championed engineering best practices across organizations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Mechanical CAD Engineer with 4+ years of experience in Product Design and Sheet Metal Design using PTC Creo. 
            Experienced in developing sheet metal components, manufacturing drawings, GD&T application, BOM generation, and large assembly modeling. 
            Strong knowledge of sheet metal manufacturing processes, Design for Manufacturing (DFM), and fabrication principles. 
            Proficient in Creo 7.0, Windchill, Creo View, AutoCAD, Siemens NX, and SolidWorks. 
            A collaborative team player committed to delivering high-quality, manufacturable designs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass glow rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Highlights */}
        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
