import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Development
  { name: "HTML/CSS", level: 85, category: "development" },
  { name: "JavaScript", level: 80, category: "development" },
  { name: "React", level: 75, category: "development" },
  { name: "PHP", level: 70, category: "development" },
  { name: "Java", level: 75, category: "development" },
  { name: "Spring Boot", level: 70, category: "development" },

  // Data & Analytics
  { name: "SQL / MySQL", level: 80, category: "data" },
  { name: "Python (pandas, NumPy)", level: 75, category: "data" },
  { name: "Excel (Advanced)", level: 85, category: "data" },
  { name: "Tableau", level: 70, category: "data" },
  { name: "Power BI", level: 60, category: "data" },
  { name: "Looker Studio", level: 60, category: "data" },
  { name: "Google Analytics", level: 60, category: "data" },

  // Tools
  { name: "Git / GitHub", level: 85, category: "tools" },
  { name: "Jira / Confluence", level: 60, category: "tools" },
  { name: "Microsoft Office (Teams, Outlook)", level: 85, category: "tools" },
  { name: "SharePoint", level: 70, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
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

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
	                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="font-semibold text-sm">{skill.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {getLevelLabel(skill.level)}
                </span>
              </div>
              <div className="w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-1.5 rounded-full origin-left animate-[grow_1.2s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
