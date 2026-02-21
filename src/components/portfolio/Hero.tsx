import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <p className="fade-up text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8">
          Web Designer & Developer
        </p>
        <h1 className="fade-up fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-foreground mb-8 text-balance">
          Daniel
          <br />
          Sierra
        </h1>
        <p className="fade-up fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed font-light">
          I design and develop digital experiences that elevate your brand.
        </p>
        <div className="fade-up fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#proyectos">View projects</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contacto">Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
