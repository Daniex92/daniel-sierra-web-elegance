import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="fade-up text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Diseñador & Desarrollador Web
        </p>
        <h1 className="fade-up fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-6 text-balance">
          Diseño y desarrollo experiencias digitales que elevan tu marca.
        </h1>
        <p className="fade-up fade-up-delay-2 text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Creo presencia digital estratégica para marcas, empresas y profesionales
          que buscan destacar con elegancia y propósito.
        </p>
        <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#proyectos">Ver proyectos</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contacto">Contactar</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
