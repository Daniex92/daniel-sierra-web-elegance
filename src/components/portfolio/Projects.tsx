import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Plataforma Académica",
    description:
      "Proyecto de grado enfocado en diseño de interfaz y experiencia de usuario para un sistema de gestión educativa moderno.",
    tags: ["UX/UI", "HTML", "CSS", "JavaScript"],
    image: project1,
  },
  {
    title: "E-Commerce Estratégico",
    description:
      "Plataforma de ventas online en desarrollo, diseñada con foco en conversión y una experiencia de compra fluida.",
    tags: ["React", "Diseño Web", "Estrategia Digital"],
    image: project2,
    badge: "En desarrollo",
  },
  {
    title: "Landing Corporativa",
    description:
      "Sitio web profesional para marca corporativa con diseño premium, optimizado para rendimiento y posicionamiento.",
    tags: ["Diseño Web", "Frontend", "SEO"],
    image: project3,
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Proyectos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Trabajo seleccionado
          </h2>
        </div>

        <div className="grid gap-10 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`fade-up fade-up-delay-${i + 1} group bg-card rounded-2xl overflow-hidden hover-lift border border-border/30`}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.badge && (
                    <span className="absolute top-4 left-4 text-xs bg-foreground/90 text-background px-3 py-1 rounded-full font-medium">
                      {project.badge}
                    </span>
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground border border-border px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="self-start inline-flex items-center gap-2 text-sm font-medium text-foreground group/btn">
                    <span className="relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-100 after:origin-left group-hover/btn:after:scale-x-0 after:transition-transform after:duration-500">
                      Ver proyecto
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
