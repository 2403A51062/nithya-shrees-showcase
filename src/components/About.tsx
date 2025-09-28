import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about finding innovative solutions to complex challenges"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaborator",
      description: "Strong communication skills and experience in collaborative environments"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Focused on becoming a skilled Software Engineer with continuous learning"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always eager to learn new technologies and improve existing skills"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Passionate Computer Science Student
            </h3>
            <div className="space-y-4 text-foreground-muted">
              <p>
                I'm Siripuram Nithya Shree, a curious and adaptable 2nd-year Computer Science 
                student at SR University. My journey in technology is driven by an insatiable 
                curiosity for how software can solve real-world problems and improve people's lives.
              </p>
              <p>
                Through hands-on experience in internships and participation in prestigious 
                competitions like the Smart India Hackathon (SIH), I've developed strong 
                problem-solving skills and the ability to work effectively in team environments.
              </p>
              <p>
                My goal is to become a skilled Software Engineer, specializing in web development 
                and creating innovative software solutions that make a meaningful impact.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Education</h4>
              <div className="card-glass p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-foreground">
                      B.Tech in Computer Science
                    </h5>
                    <p className="text-foreground-muted">SR University</p>
                    <p className="text-sm text-foreground-muted">2024 - 2028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-glass card-hover p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <div className="text-accent-foreground">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-foreground-muted text-sm">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;