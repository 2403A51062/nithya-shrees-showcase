import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Nithya Shree
            </h3>
            <p className="text-foreground-muted mb-4">
              Aspiring Software Engineer passionate about creating innovative solutions 
              through code and collaboration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/nithyashree-siripuram-1b43a8343/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/2403A51062?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:nithyashree.siripuram@example.com"
                className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center text-accent-foreground hover:shadow-accent transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-foreground-muted hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-foreground-muted">
              <p>Hyderabad, India</p>
              <a
                href="mailto:nithyashree.siripuram@example.com"
                className="block hover:text-primary transition-colors duration-300"
              >
                nithyashree.siripuram@example.com
              </a>
              <p className="text-sm mt-4">
                Available for internships, projects, and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-sm">
            © {currentYear} Nithya Shree. All rights reserved.
          </p>
          <p className="text-foreground-muted text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-accent" /> and lots of code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;