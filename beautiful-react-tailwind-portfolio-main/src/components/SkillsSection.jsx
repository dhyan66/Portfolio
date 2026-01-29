import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Development
  {
    name: "HTML/CSS",
    level: 85,
    category: "development",
    icon: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "JavaScript",
    level: 80,
    category: "development",
    icon: "https://cdn.simpleicons.org/javascript",
    featured: true,
  },
  {
    name: "React",
    level: 75,
    category: "development",
    icon: "https://cdn.simpleicons.org/react",
    featured: true,
  },
  {
    name: "PHP",
    level: 70,
    category: "development",
    icon: "https://cdn.simpleicons.org/php",
  },
  {
    name: "Java",
    level: 75,
    category: "development",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    featured: true,
  },
  {
    name: "Spring Boot",
    level: 70,
    category: "development",
    icon: "https://cdn.simpleicons.org/springboot",
  },

  // Data & Analytics
  {
    name: "SQL / MySQL",
    level: 80,
    category: "data",
    icon: "https://cdn.simpleicons.org/mysql",
    featured: true,
  },
  {
    name: "Python (pandas, NumPy)",
    level: 75,
    category: "data",
    icon: "https://cdn.simpleicons.org/python",
    featured: true,
  },
  {
    name: "Excel (Advanced)",
    level: 85,
    category: "data",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftexcel.svg",
    featured: true,
  },
  {
    name: "Tableau",
    level: 70,
    category: "data",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tableau.svg",
  },
  {
    name: "Power BI",
    level: 60,
    category: "data",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/powerbi.svg",
  },
  {
    name: "Looker Studio",
    level: 60,
    category: "data",
    icon: "https://cdn.simpleicons.org/looker",
  },
  {
    name: "Google Analytics",
    level: 60,
    category: "data",
    icon: "https://cdn.simpleicons.org/googleanalytics",
  },

  // Tools
  {
    name: "Git / GitHub",
    level: 85,
    category: "tools",
    icon: "https://cdn.simpleicons.org/github",
    featured: true,
  },
  {
    name: "Jira / Confluence",
    level: 60,
    category: "tools",
    icon: "https://cdn.simpleicons.org/jira",
  },
  {
    name: "Microsoft Office (Teams, Outlook)",
    level: 85,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoffice.svg",
  },
  {
    name: "SharePoint",
    level: 70,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsharepoint.svg",
  },
  {
    name: "VS Code",
    level: 85,
    category: "tools",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg",
    featured: true,
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "development", label: "Dev" },
  { key: "data", label: "Data" },
  { key: "tools", label: "Tools" },
];

const getLevelLabel = (level) => {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Advanced";
  if (level >= 55) return "Intermediate";
  return "Beginner";
};

const getInitials = (name) => {
  const parts = name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean);

  if (!parts.length) return name.slice(0, 2).toUpperCase();

  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const SkillIcon = ({ skill, size = "md" }) => {
  const sizeClasses = size === "sm" ? "h-6 w-6" : "h-9 w-9";
  const iconClasses = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const textClasses = size === "sm" ? "text-[8px]" : "text-[9px]";

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-primary/10 text-primary/70 font-semibold",
        sizeClasses,
        textClasses
      )}
      aria-hidden="true"
    >
      {getInitials(skill.name)}
      {skill.icon ? (
        <img
          src={skill.icon}
          alt=""
          className={cn("absolute", iconClasses)}
          loading="lazy"
        />
      ) : null}
    </span>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const featuredSkills = skills.filter((skill) => skill.featured);

  const groupedSkills = categories
    .filter((category) => category.key !== "all")
    .map((category) => ({
      ...category,
      items: skills.filter((skill) => skill.category === category.key),
    }));
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-gradient-to-b from-secondary/40 via-background to-background"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {featuredSkills.length > 0 ? (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Top skills
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {featuredSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-xs text-foreground/90 shadow-xs"
                >
                  <SkillIcon skill={skill} size="sm" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 border",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground border-primary/60"
	                  : "bg-secondary/70 text-foreground hover:bg-secondary border-border/60"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <div className="space-y-8">
            {groupedSkills.map((group) => (
              <div key={group.key}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.label}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {group.items.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group rounded-lg border border-border/60 bg-card/70 p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <SkillIcon skill={skill} />
                          <h3 className="font-semibold text-sm">{skill.name}</h3>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>
                      <div className="w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="h-1.5 rounded-full origin-left animate-[grow_1.2s_ease-out] bg-gradient-to-r from-primary via-primary/80 to-primary/60"
                          style={{ width: skill.level + "%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group rounded-lg border border-border/60 bg-card/70 p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <SkillIcon skill={skill} />
                    <h3 className="font-semibold text-sm">{skill.name}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {getLevelLabel(skill.level)}
                  </span>
                </div>
                <div className="w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-1.5 rounded-full origin-left animate-[grow_1.2s_ease-out] bg-gradient-to-r from-primary via-primary/80 to-primary/60"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
