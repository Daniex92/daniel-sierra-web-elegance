const skills = [
  { name: "HTML5", level: 70 },
  { name: "CSS3", level: 75 },
  { name: "JavaScript", level: 35 },
  { name: "React", level: 60 },
  { name: "UX/UI Design", level: 60 },
  { name: "Edición Visual", level: 85 },
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Technical Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-20 gap-y-10 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`fade-up fade-up-delay-${(i % 3) + 1}`}>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-px bg-border overflow-hidden">
                <div
                  className="h-full bg-foreground/50 transition-all duration-1000 ease-out"
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
