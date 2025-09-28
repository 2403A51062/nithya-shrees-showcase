import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import profileImage from "@/assets/nithya-new-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="blob w-72 h-72 top-20 left-10 bg-gradient-primary floating"></div>
        <div className="blob w-96 h-96 top-40 right-20 bg-gradient-accent floating animation-delay-200"></div>
        <div className="blob w-48 h-48 bottom-32 left-1/4 bg-gradient-primary floating animation-delay-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-lg text-foreground-muted mb-2">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-4">
                Nithya Shree
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Aspiring Software Engineer
              </h2>
              <p className="text-lg text-foreground-muted max-w-lg mx-auto lg:mx-0">
                A passionate 2nd-year Computer Science student at SR University, 
                dedicated to web development and software programming with a drive 
                to create innovative solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="btn-hero">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button className="btn-hero-outline">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/nithyashree-siripuram-1b43a8343/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/2403A51062?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={profileImage}
                  alt="Nithya Shree - Computer Science Student"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;