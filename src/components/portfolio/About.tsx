import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="sobre-mi" className="py-28 md:py-36 section-alt">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start max-w-5xl mx-auto">
          <div className="fade-up space-y-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Strategy, design, and code
              <br />aligned to create impact.
            </h2>
            <div className="flex items-center gap-5 pt-2">
              <Avatar className="h-20 w-20 border-2 border-border/40 shadow-lg shadow-black/20 shrink-0">
                <AvatarImage src="/placeholder.svg" alt="Daniel Sierra" className="object-cover" />
                <AvatarFallback className="text-lg font-semibold bg-secondary text-secondary-foreground">DS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">Daniel Sierra</p>
                <p className="text-xs text-muted-foreground">Bogotá, Colombia</p>
              </div>
            </div>
          </div>
          <div className="fade-up fade-up-delay-1 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm Daniel Sierra, a web designer and developer based in Bogotá, Colombia.
              I design and build digital experiences that align aesthetics, functionality, and business strategy.
              I don't just create visually appealing websites — I develop platforms built to convert, communicate clearly, and drive measurable impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             I integrate my background in photography and digital marketing as a strategic advantage in web development.
I understand visual language and user behavior, which allows every aesthetic decision to serve a purpose and every line of code to be built for scalability, optimization, and long-term growth.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Web Design", "Frontend Development", "Strategic Photography", "Digital Marketing"].map(
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
