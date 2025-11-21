import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "Google IT Support Professional Certificate",
      issuer: "Google via Coursera",
      date: "2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE123",
      description: "Comprehensive IT support training covering troubleshooting, customer service, networking, operating systems, system administration, and security.",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google via Coursera",
      date: "2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/EXAMPLE456",
      description: "Advanced data analytics training including data cleaning, analysis, visualization, and SQL for data-driven decision making.",
    },
    {
      title: "Google Workspace Administrator",
      issuer: "Google Cloud",
      date: "2023",
      credentialUrl: "https://www.credential.net/example",
      description: "Certification in managing Google Workspace services, user management, security, and collaboration tools for organizations.",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certificates & Achievements
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Professional certifications and accomplishments
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 card-shadow border-border/50"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Award className="text-secondary" size={32} />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground font-medium">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View Certificate
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

export default Certificates;
