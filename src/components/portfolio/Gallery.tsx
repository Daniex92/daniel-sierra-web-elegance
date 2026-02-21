import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Arquitectura moderna", description: "Exploración de líneas y formas en la arquitectura urbana contemporánea." },
  { src: gallery2, alt: "Bogotá urbana", description: "La energía visual de una ciudad en constante transformación." },
  { src: gallery3, alt: "Producto minimalista", description: "Composición limpia enfocada en la esencia del producto." },
  { src: gallery4, alt: "Paisaje colombiano", description: "La riqueza natural capturada con sensibilidad y propósito." },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-28 md:py-36 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Galería
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Visión fotográfica
          </h2>
        </div>

        <div className="columns-2 md:columns-3 gap-4 max-w-5xl mx-auto space-y-4">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`fade-up fade-up-delay-${(i % 3) + 1} break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer`}
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <div
            className="max-w-3xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full rounded-xl mb-6"
            />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {images[selectedImage].alt}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {images[selectedImage].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
