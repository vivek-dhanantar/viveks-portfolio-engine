import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/vivek-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-20">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Vivek Kurmi
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating elegant solutions to complex problems. 
              Specializing in modern web technologies and scalable applications.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-muted transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="ghost" className="hover:text-primary transition-all">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
              <img
                src={profileImage}
                alt="Vivek Kurmi"
                className="relative rounded-full w-80 h-80 object-cover shadow-card border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
