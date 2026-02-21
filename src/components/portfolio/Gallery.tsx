import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Arquitectura moderna", tall: true },
  { src: gallery2, alt: "Bogotá urbana", tall: false },
  { src: gallery3, alt: "Producto minimalista", tall: true },
  { src: gallery4, alt: "Paisaje colombiano", tall: false },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 md:py-32 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Visión fotográfica
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 max-w-5xl mx-auto space-y-4">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`fade-up fade-up-delay-${(i % 3) + 1} break-inside-avoid group relative overflow-hidden rounded-xl`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
