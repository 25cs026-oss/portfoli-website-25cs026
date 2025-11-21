import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: "Communicate effectively on GitHub using Markdown",
      issuer: "GitHub via Microsoft Learn",
      date: "2025",
      credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/25CS026KIRTANKAKADIYA-8235/WVZA3YSN?sharingId=9E71FAF601A7C5E2",
      description: "Learn to use Markdown to communicate with brevity, clarity, and expression.",
    },
    {
      title: "Manage your work with GitHub Projects",
      issuer: "GitHub via Microsoft Learn",
      date: "2025",
      credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/25CS026KIRTANKAKADIYA-8235/WVZAU8QN?sharingId=9E71FAF601A7C5E2",
      description: "Learn to use GitHub Projects to create issues, break them into tasks, track relationships, add custom fields, and have conversations.",
    },
    {
      title: "Code with GitHub Codespaces",
      issuer: "GitHub via Microsoft Learn",
      date: "2025",
      credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/25CS026KIRTANKAKADIYA-8235/WVZAUSFN?sharingId=9E71FAF601A7C5E2",
      description: "Learn to use GitHub Projects to create issues, break them into tasks, track relationships, add custom fields, and have conversations.",
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
