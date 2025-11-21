import { Code2, Database, Globe, Smartphone, Server, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, HTML5, CSS3",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs",
    },
    {
      icon: Database,
      title: "Database",
      description: "PostgreSQL, MongoDB, SQL",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Git, GitHub, Responsive Design",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Progressive Web Apps, Mobile Optimization",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, User-Centered Design, Accessibility",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 card-shadow border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
