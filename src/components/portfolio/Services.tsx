const services = [
  {
    number: "01",
    title: "Web Design",
    description:
      "Elegant and functional interfaces that communicate the essence of your brand with visual clarity.",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Clean, modern and scalable code. Fast, responsive and optimized websites.",
  },
  {
    number: "03",
    title: "Digital Presence",
    description:
      "Integral strategy to position your brand in the digital environment with real impact.",
  },
  {
    number: "04",
    title: "Visual Production",
    description:
      "Professional photographic and visual content that elevates your brand perception.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            What I can do for you
          </h2>
        </div>

        <div className="max-w-4xl mx-auto divide-y divide-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`fade-up fade-up-delay-${i + 1} group py-10 first:pt-0 last:pb-0 flex items-start gap-8 cursor-default`}
            >
              <span className="text-xs text-muted-foreground font-mono mt-1 hidden sm:block">
                {service.number}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
