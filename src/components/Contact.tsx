import { Mail, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          I'd love to hear from you! Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-6 card-shadow border-border/50">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Fill out this Google Form to get in touch:
              </p>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
                asChild
              >
                <a
                  href="https://forms.gle/fzW3DoqGGMSmXcPm9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Contact Form
                </a>
              </Button>
              <div className="pt-4 space-y-3">
                <p className="text-sm text-muted-foreground">Or email me directly:</p>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a href="mailto:25cs026@caharusat.edu.in">
                    <Mail className="mr-2" size={18} />
                    25cs026@charusat.edu.in
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 card-shadow border-border/50">
            <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Find me on these platforms:
              </p>
              
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/kirtan-kakadiya-417480378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                >
                  <Linkedin className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">
                      Connect professionally
                    </div>
                  </div>
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4"
                asChild
              >
                <a
                  href="https://github.com/25cs026-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                >
                  <Github className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-muted-foreground">
                      Check out my repositories
                    </div>
                  </div>
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-4"
                asChild
              >
                <a
                  href="mailto:25cs026@charusat.edu.in"
                  className="flex items-start gap-3"
                >
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">
                      25cs026@charusat.edu.in
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
