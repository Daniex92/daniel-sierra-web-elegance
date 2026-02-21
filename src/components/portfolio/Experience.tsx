const timeline = [
  {
    period: "2026 — Present",
    title: "IT Support",
    description:
      "Member of the technical support team at Dialectica, providing specialized assistance and efficient issue resolution within digital environments.",
  },
   {
    period: "2026 — Present",
    title: "Web Designer",
    description:
      "Creation of strategic digital presence for brands and professionals. Design, development and web optimization.",
  },
  {
    period: "2023 — 2024",
    title: "Digital Marketing & Visual Production",
    description:
      "Management of digital campaigns, creation of visual content and brand strategy for various clients.",
  },
  {
    period: "2022 — 2023",
    title: "Academic & Personal Projects",
    description:
      "Development of academic projects and personal platforms applying UX/UI design and frontend development.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-28 md:py-36 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Career Path
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((item, i) => (
            <div
              key={item.period}
              className={`fade-up fade-up-delay-${i + 1} relative pl-8 pb-14 last:pb-0 border-l border-border`}
            >
              <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                {item.period}
              </p>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
