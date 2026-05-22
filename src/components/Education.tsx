import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "M Tech Advanced Manufacturing Systems",
    school: "SR Engineering College",
    location: "Hasanparthy, Warangal",
    period: "2017 – 2019",
    gpa: "9.2 / 10",
    description:
      "Specialized in Advanced Manufacturing Systems",
    honors: ["Dean's List", "Research Fellowship", "Teaching Assistant – CS 142"],
  },
  {
    degree: "B Tech",
    school: "Talla Padmavathi College of Engineering",
    location: "Kazipet, Warangal",
    period: "2012 – 2015",
    gpa: "66.73%",
    description:
      "Graduated with honors. Active member of ACM and Hackers@Berkeley. Won 3 hackathons.",
    honors: ["Magna Cum Laude", "EECS Scholar", "Hackathon Winner x3"],
  },
  {
    degree: "Diploma in Mechanical Engineering",
    school: "VMR Polytechnic, Rampur",
    location: "Kazipet, Warangal",
    period: "2008 – 2012",
    gpa: "64.93%",
    description:
      "Graduated with honors. Active member of ACM and Hackers@Berkeley. Won 3 hackathons.",
    honors: ["Magna Cum Laude", "EECS Scholar", "Hackathon Winner x3"],
  },
];

const certifications = [
  { name: "Jr Designer CAD/CAM ", issuer: "Central Institute of Tool Design", year: "2025" },
  { name: "NX/Unigraphics", issuer: "Central Institute of Tool Design", year: "2025" },
  { name: "Auto CAD", issuer: "Central Institute of Tool Design", year: "2012" },
  { name: "HVAC Pro the ultimate HVAC guide", issuer: "UDEMY", year: "2025" },
  { name: "Fundamentals of FMT and CNC", issuer: "Bharath Sevac Samaj", year: "2011" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl font-bold tracking-tight">
            Education
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
              <GraduationCap size={22} className="text-indigo-400" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass rounded-2xl p-6 card-hover"
                >
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-indigo-300">{edu.school}</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Award size={13} />
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {edu.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.honors.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
              <Award size={22} className="text-indigo-400" />
              Certifications
            </h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 rounded-xl border border-border-light bg-surface-light/50 p-4 transition-colors hover:border-indigo-500/20"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                      <Award size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-text-muted">
                        {cert.issuer} &middot; {cert.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
