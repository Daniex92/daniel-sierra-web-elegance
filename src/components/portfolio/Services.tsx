import { Monitor, Code, TrendingUp, Camera } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Diseño Web Profesional",
    description:
      "Interfaces elegantes y funcionales que comunican la esencia de tu marca con claridad visual.",
  },
  {
    icon: Code,
    title: "Desarrollo Frontend",
    description:
      "Código limpio, moderno y escalable. Sitios rápidos, responsivos y optimizados.",
  },
  {
    icon: TrendingUp,
    title: "Presencia Digital",
    description:
      "Estrategia integral para posicionar tu marca en el entorno digital con impacto real.",
  },
  {
    icon: Camera,
    title: "Producción Visual",
    description:
      "Contenido fotográfico y visual profesional que eleva la percepción de tu marca.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Lo que puedo hacer por ti
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`fade-up fade-up-delay-${i + 1} group bg-card border border-border/50 rounded-2xl p-8 hover-lift`}
            >
              <service.icon
                className="w-6 h-6 text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-base font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
