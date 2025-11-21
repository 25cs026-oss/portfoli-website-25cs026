import { Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Kirtan Kakadiya. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-2">
              Built with <Heart className="text-secondary" size={16} fill="currentColor" /> using React & Tailwind CSS
            </p>
          </div>
          
          <Button
            variant="outline"
            asChild
          >
            <a
              href="https://github.com/25cs026-oss/portfoli-website-25cs026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View Source Code
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
