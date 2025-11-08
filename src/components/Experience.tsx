import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects. Specialized in React, TypeScript, and cloud deployments.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description: "Contributed to frontend development using modern JavaScript frameworks. Gained experience in agile methodologies.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Focused on software engineering and web technologies.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background" id="experience">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
            </div>
            
            <div className="space-y-6 ml-12">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-l-4 border-l-primary"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                    <span className="text-accent font-medium">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6 ml-12">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in border-l-4 border-l-secondary"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <span className="text-accent font-medium">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
