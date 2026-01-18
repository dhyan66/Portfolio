import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DAL Tutor App",
    description:
      "Student support app with backend APIs, payments integration, and KPI-style reporting.",
    image: "projects/project1.png",
    tags: ["Java", "Spring Boot", "Firebase", "PayPal", "MySQL"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Football Player Database Analysis",
    description:
      "Cleaned and analyzed large football datasets and built dashboards to visualize performance trends.",
    image: "projects/project2.png",
    tags: ["MySQL", "Tableau", "Excel"],
    demoUrl: "",
    githubUrl: "https://github.com/dhyan66/football-database.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A fast, responsive portfolio built with React + Tailwind and deployed with modern tooling.",
    image: "projects/project3.png",
    tags: ["React", "Vite", "Tailwind"],
    demoUrl: "https://portfolio-dhyan-aaran.netlify.app/",
    githubUrl: "https://github.com/dhyan66/Portfolio.git",
  },
  {
    id: 4,
    title: "Apple Website Clone",
    description:
      "A modern Apple-style website clone with responsive UI and smooth interactions.",
    image: "projects/project4.png",
    tags: ["JavaScript", "Vite", "Tailwind"],
    demoUrl: "https://malhar999clone.netlify.app/",
    githubUrl: "https://github.com/dhyan66/Apple_Website_Clone",
  },
];

export const ProjectsSection = () => {
  const toPublicUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

  // ✅ fixed-size icon wrapper so GitHub icon aligns even when demo is missing
  const iconSlot =
    "inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground/80 hover:text-primary transition-colors duration-300";

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with attention
          to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const imageSrc = project.image?.startsWith("http")
              ? project.image
              : toPublicUrl(project.image);

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border flex flex-col"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden shrink-0">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                  <p className="text-muted-foreground text-sm mb-4 min-h-[3.5rem]">
                    {project.description}
                  </p>

                  {/* ✅ Icon row pinned + horizontally consistent */}
                  <div className="mt-auto pt-4">
                    <div className="flex items-center gap-2">
                      {/* Demo icon slot (always takes space) */}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={iconSlot}
                          aria-label={`Open demo for ${project.title}`}
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : (
                        // placeholder keeps GitHub icon position consistent
                        <span className="h-9 w-9" aria-hidden="true" />
                      )}

                      {/* GitHub icon (now always in same spot) */}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={iconSlot}
                          aria-label={`Open GitHub repo for ${project.title}`}
                          title="GitHub Repo"
                        >
                          <Github size={20} />
                        </a>
                      ) : (
                        // optional: if you want alignment even when githubUrl is missing too
                        <span className="h-9 w-9" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dhyan66"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
