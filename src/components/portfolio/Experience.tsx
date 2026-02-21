const timeline = [
  {
    period: "2024 — Presente",
    title: "Diseñador & Desarrollador Web Freelance",
    description:
      "Creación de presencia digital estratégica para marcas y profesionales. Diseño, desarrollo y optimización web.",
  },
  {
    period: "2023 — 2024",
    title: "Marketing Digital & Producción Visual",
    description:
      "Gestión de campañas digitales, creación de contenido visual y estrategia de marca para diversos clientes.",
  },
  {
    period: "2022 — 2023",
    title: "Proyectos Académicos & Personales",
    description:
      "Desarrollo de proyectos de grado y plataformas personales aplicando diseño UX/UI y desarrollo frontend.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-28 md:py-36 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Experiencia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Trayectoria
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((item, i) => (
            <div
              key={item.period}
              className={`fade-up fade-up-delay-${i + 1} relative pl-8 pb-14 last:pb-0 border-l border-border`}
            >
              <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {item.period}
              </p>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
