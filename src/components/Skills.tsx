import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Sheet Metal",
    skills: [
      { name: "Walls ", level: 95 },
      { name: "Flanges ", level: 90 },
      { name: "Bends ", level: 90 },
      { name: "Hems ", level: 85 },
      { name: "Corner Reliefs", level: 80 },
      { name: "Flat Patterns", level: 80 },
      { name: "Sheet Metal Modeling", level: 80 },
    ],
  },
  {
    title: "Drafting",
    skills: [
      { name: "Manufacturing Drawings ", level: 95 },
      { name: "GD&T ", level: 90 },
      { name: "BOM Generation  ", level: 90 },
      { name: "Detailing ", level: 85 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Large Assemblies ", level: 95 },
      { name: "Design Optimization ", level: 90 },
      { name: "DFM ", level: 90 },
      { name: "Engineering Drawings ", level: 85 },
    ],
  },
  {
    title: "Manufacturing",
    skills: [
      { name: "Sheet Metal Fabrication ", level: 95 },
      { name: "Weldments ", level: 90 },
      { name: "Light & Heavy Fabrication", level: 90 },
      { name: "Laser Cutting ", level: 85 },
      { name: "Bending ", level: 85 },
      { name: "Welding ", level: 85 },
    ],
  },
  {
    title: "CAD",
    skills: [
      { name: "AUTO CAD", level: 95 },
      { name: "PTC CREO", level: 90 },
      { name: "SOLIDWORKS", level: 90 },
      { name: "NX/UG", level: 85 },
      { name: "CATIA", level: 80 },
    ],
  },
  {
    title: "CAM",
    skills: [
      { name: "NX/UG", level: 90 },
      { name: "SOLIDWORKS", level: 82 },
      { name: "PTC CREO", level: 88 },
    ],
  },
  {
    title: "CAE",
    skills: [
      { name: "ANSYS APDL", level: 85 },
      { name: "ANSYS WORKBENCH", level: 88 },
     
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "MS EXCEL", level: 75 },
      { name: "Drafting, GD&T", level: 85 },
      { name: "Design Optimization", level: 90 },
      { name: "TEAM CENTER", level: 88 },
      { name: "Git / GitHub", level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Technologies I've mastered over 8+ years of hands-on development.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 card-hover"
            >
              <h3 className="mb-6 text-lg font-semibold text-indigo-300">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-lighter">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + catIndex * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
