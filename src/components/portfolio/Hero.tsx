import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const roles = ["Web Designer", "Developer"];

const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 50);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-center">
      <span className="font-mono">{displayed}</span>
      <span className="inline-block w-[2px] h-[1em] bg-muted-foreground ml-0.5 animate-[blink_1s_steps(1)_infinite]" />
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed max-md:hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 md:hidden bg-[hsl(var(--section-darker))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <p className="fade-up text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8">
          <TypingText />
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
