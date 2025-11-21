import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image1 from "@/assets/IMG-20251119-WA0001.jpg";
import Image2 from "@/assets/IMG-20251119-WA0015.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Chess Board GUI using C",
      description: "A C program that creates a graphical chessboard interface using basic graphics to visually represent an 8x8 chess grid with alternating colored squares, demonstrating fundamental GUI programming concepts in C on VS Code.",
      image: Image1,
      technologies: ["C", "VS-Coder"],
      githubUrl: "https://github.com/25cs026-oss/C---Project-",
      liveUrl: "------------------------------",
    },
    {
      title: "Fire Asisstant System using ESP32",
      description: "A smart fire assistant system using ESP32, DHT11, MQ-2, and flame sensor to detect smoke, temperature, and flames for real-time safety monitoring and alerts.",
      image: Image2,
      technologies: ["ESP32", "DHT11", "MQ-2","Flame Sensor"],
      githubUrl: "---Coming Soooonnnnn.........-----",
      liveUrl: "--------------------------------------",
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
