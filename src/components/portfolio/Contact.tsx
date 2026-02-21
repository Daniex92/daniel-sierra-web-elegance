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
              Have a project in mind?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
            Let’s talk. Let’s turn your idea into a digital presence that is strategic, scalable, and built to grow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span>2006daniel2006.92@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
