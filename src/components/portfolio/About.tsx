const About = () => {
  return (
    <section id="sobre-mi" className="py-28 md:py-36 section-alt">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">
          <div className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre mí
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Estrategia, diseño
              <br />y código.
            </h2>
          </div>
          <div className="fade-up fade-up-delay-1 space-y-6">
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
            <div className="flex flex-wrap gap-3 pt-4">
              {["Diseño Web", "Frontend", "Fotografía", "Marketing Digital"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wide text-muted-foreground border border-border px-4 py-2 rounded-full"
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
