import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DAL Tutor App",
    description:
      "Student support app with backend APIs, payments integration, and KPI-style reporting.",
    image: "/projects/project1.png",
    tags: ["Java", "Spring Boot", "Firebase", "PayPal", "MySQL"],
    // Add links when ready
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Football Player Database Analysis",
    description:
      "Cleaned and analyzed large football datasets and built dashboards to visualize performance trends.",
    image: "/projects/project2.png",
    tags: ["MySQL", "Tableau", "Excel"],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A fast, responsive portfolio built with React + Tailwind and deployed with modern tooling.",
    image: "/projects/project3.png",
    tags: ["React", "Vite", "Tailwind"],
    demoUrl: "",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
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

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Open demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`Open GitHub repo for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
