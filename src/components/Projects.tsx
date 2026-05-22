import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: "FinFlow Dashboard",
    description:
      "A real-time financial analytics platform with interactive charts, portfolio tracking, and AI-powered insights. Serves 50K+ active users.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "TaskFlow Pro",
    description:
      "Collaborative project management tool with Kanban boards, Gantt charts, time tracking, and Slack integration. Built for remote teams.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Next.js", "Prisma", "tRPC", "Tailwind CSS", "PostgreSQL"],
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "EcoCart E-Commerce",
    description:
      "Sustainable e-commerce platform with carbon footprint tracking per purchase. Includes Stripe integration and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "DevConnect API",
    description:
      "RESTful API service for developer social platform. Features OAuth2.0, rate limiting, WebSocket notifications, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            A selection of projects that showcase my passion for building elegant,
            performant software.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl overflow-hidden card-hover group ${
                project.featured ? "sm:col-span-2 sm:grid sm:grid-cols-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video sm:aspect-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="rounded-lg p-1.5 text-text-muted transition-colors hover:text-white hover:bg-surface-light"
                        aria-label="View source"
                      >
                        <GithubIcon />
                      </a>
                      <a
                        href={project.live}
                        className="rounded-lg p-1.5 text-text-muted transition-colors hover:text-white hover:bg-surface-light"
                        aria-label="Live demo"
                      >
                        <SquareArrowOutUpRight size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
