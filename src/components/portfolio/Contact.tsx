import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-28 md:py-36 section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Me encantaría escuchar sobre tu próximo proyecto. Hablemos sobre cómo
              puedo ayudarte a crear una presencia digital que destaque.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span>contacto@danielsierra.co</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          <form
            className="fade-up fade-up-delay-1 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="text-xs tracking-wide text-muted-foreground mb-2 block">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/50 transition-colors duration-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs tracking-wide text-muted-foreground mb-2 block">
                Correo
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/50 transition-colors duration-500"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs tracking-wide text-muted-foreground mb-2 block">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/50 transition-colors duration-500 resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            <Button variant="hero" size="lg" className="w-full mt-2">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
