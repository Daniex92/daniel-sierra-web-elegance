const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "UX/UI Design", level: 80 },
  { name: "Edición Visual", level: 85 },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Habilidades
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Stack técnico
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`fade-up fade-up-delay-${(i % 3) + 1}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground/70 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
