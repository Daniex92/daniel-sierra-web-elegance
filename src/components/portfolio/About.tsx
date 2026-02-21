const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 section-alt">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="fade-up">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Sobre mí
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Estrategia, diseño y código al servicio de tu marca.
            </h2>
          </div>
          <div className="fade-up fade-up-delay-1 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Soy Daniel Sierra, diseñador y desarrollador web con base en Bogotá, Colombia.
              Mi enfoque combina visión estratégica con ejecución técnica para crear
              experiencias digitales que no solo se ven bien, sino que generan resultados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Integro mi experiencia en fotografía y marketing digital como valor diferencial,
              ofreciendo una perspectiva única donde cada elemento visual tiene un propósito
              claro y cada línea de código está pensada para escalar.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Diseño Web", "Desarrollo Frontend", "Fotografía", "Marketing Digital"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wide text-muted-foreground bg-secondary px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
