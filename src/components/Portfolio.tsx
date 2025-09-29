import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Wallet, Calendar, Users, Code } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description: "A comprehensive web application for personal finance management featuring expense categorization, budget tracking, and financial insights with an intuitive user interface.",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      features: [
        "Real-time expense tracking",
        "Category-wise organization",
        "Budget management",
        "Data visualization",
        "Responsive design"
      ],
      icon: <Wallet className="w-8 h-8" />,
      color: "bg-gradient-primary",
      status: "Completed"
    },
    {
      title: "University Project Portal",
      description: "A collaborative platform designed for academic project management, enabling students to submit, track, and collaborate on coursework with integrated feedback systems.",
      technologies: ["React", "JavaScript", "CSS3", "API Integration"],
      features: [
        "Project submission system",
        "Collaboration tools",
        "Progress tracking",
        "Feedback integration",
        "User dashboard"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "bg-gradient-accent",
      status: "In Progress"
    },
    {
      title: "Event Management System",
      description: "A dynamic web application for organizing and managing college events, featuring registration systems, event calendars, and participant management.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Event registration",
        "Calendar integration",
        "Participant management",
        "Notification system",
        "Admin dashboard"
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-gradient-primary",
      status: "Completed"
    },
    {
      title: "Team Collaboration Hub",
      description: "A platform developed during hackathons for enhanced team communication and project coordination, featuring real-time messaging and task management.",
      technologies: ["JavaScript", "CSS3", "HTML5", "WebSocket"],
      features: [
        "Real-time messaging",
        "Task assignment",
        "File sharing",
        "Progress visualization",
        "Team analytics"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "bg-gradient-accent",
      status: "Prototype"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Portfolio & Projects
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Showcasing my journey in software development through innovative projects and practical applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glass card-hover p-8 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-foreground-muted text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="text-sm text-foreground-muted space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {project.title === "Expense Tracker" ? (
          <Button size="sm" variant="outline" className="w-full">
            <Github className="w-4 h-4 mr-2" />
            <a href="https://github.com/2403A51062/ExpenseTeacker.git" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </Button>
        ) : (
          <>
            <Button size="sm" className="btn-accent flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          </>
        )}
      </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-foreground-muted mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button className="btn-hero">
            <a href="https://github.com/2403A51062?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;