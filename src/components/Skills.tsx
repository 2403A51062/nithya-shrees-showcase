import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Brain, Users2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Java", "C", "Python"],
      color: "bg-gradient-primary"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "bg-gradient-accent"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      skills: ["Logical Thinking", "Algorithm Design", "Data Structures"],
      color: "bg-gradient-primary"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Adaptability", "Communication"],
      color: "bg-gradient-accent"
    }
  ];

  const achievements = [
    {
      title: "MotionCut Internship",
      description: "Gained hands-on experience in software development and project management",
      badge: "Internship"
    },
    {
      title: "Smart India Hackathon (SIH)",
      description: "Participated in India's biggest hackathon, developing innovative solutions",
      badge: "Competition"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic learning and practical experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glass card-hover p-6 text-center">
              <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-glass card-hover p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-gradient-accent text-accent-foreground">
                      {achievement.badge}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-foreground-muted">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;