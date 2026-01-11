import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  // ✅ Works for Netlify/Vercel/GitHub Pages subpaths
  const dalLogoSrc = `${import.meta.env.BASE_URL}dalhousie-logo.png`;

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* ✅ Dalhousie logo right under the heading */}
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>
              <img
          src="/projects/project1.png"
          alt="Dalhousie University logo"
          className="mx-auto mb-12 h-30 md:h-20w-35opacity-95"
          onError={(e) => {
            // hide if file not found so it doesn't look broken
            e.currentTarget.style.display = "none";
          }}
        />
            </h3>
            <h4>
              Applied CS student, builder, and analyst
            </h4>

            <p className="text-muted-foreground">
              I'm a Bachelor of Applied Computer Science student at Dalhousie
              University (Minor in Management Studies), with hands-on experience
              in web development, reporting, and stakeholder-focused
              documentation.
            </p>

            <p className="text-muted-foreground">
              I enjoy shipping clean, user-friendly interfaces and building data
              pipelines/dashboards that help teams make better decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive web apps with modern tooling and clean UI.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & Reporting</h4>
                  <p className="text-muted-foreground">
                    SQL/Python/Excel analysis and dashboards that tell a clear story.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Support</h4>
                  <p className="text-muted-foreground">
                    Requirements gathering, documentation, and process improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
