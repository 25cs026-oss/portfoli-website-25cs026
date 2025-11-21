import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/kirtan-profile.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Kirtan Kakadiya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A passionate developer on an academic and technical journey, crafting digital experiences that make a difference.
            </p>
            <p className="text-lg text-muted-foreground">
              Building innovative solutions with modern technologies and a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 card-shadow">
                <img
                  src={profileImage}
                  alt="Kirtan Kakadiya - Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
