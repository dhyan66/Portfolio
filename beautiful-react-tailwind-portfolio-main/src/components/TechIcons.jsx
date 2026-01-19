export const iconMap = {
  Java: {
    src: "https://cdn.simpleicons.org/java",
    label: "Java",
  },
  "Spring Boot": {
    src: "https://cdn.simpleicons.org/springboot",
    label: "Spring Boot",
  },
  Firebase: {
    src: "https://cdn.simpleicons.org/firebase",
    label: "Firebase",
  },
  PayPal: {
    src: "https://cdn.simpleicons.org/paypal",
    label: "PayPal",
  },
  MySQL: {
    src: "https://cdn.simpleicons.org/mysql",
    label: "MySQL",
  },
  Tableau: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEOogylWB8xOZ3OZjqMHA-Alt_dRMniI7ig&s",
    label: "Tableau",
  },
  Excel: {
    src: "https://cdn.jim-nielsen.com/ios/512/microsoft-excel-for-ipad-2014-05-02.png?rf=1024",
    label: "Microsoft Excel",
  },
  React: {
    src: "https://cdn.simpleicons.org/react",
    label: "React",
  },
  Vite: {
    src: "https://cdn.simpleicons.org/vite",
    label: "Vite",
  },
  "Tailwind CSS": {
    src: "https://cdn.simpleicons.org/tailwindcss",
    label: "Tailwind CSS",
  },
  JavaScript: {
    src: "https://cdn.simpleicons.org/javascript",
    label: "JavaScript",
  },
};

export const TechIcons = ({ technologies, className = "" }) => {
  if (!technologies?.length) {
    return null;
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      aria-label="Technologies used"
      role="list"
    >
      {technologies.map((tech) => {
        const icon = iconMap[tech];

        if (!icon) {
          return (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-medium border rounded-full bg-secondary/60 text-secondary-foreground/80"
              title={tech}
              role="listitem"
            >
              {tech}
            </span>
          );
        }

        return (
          <span
            key={tech}
            className="inline-flex items-center"
            title={icon.label}
            role="listitem"
          >
            <img
              src={icon.src}
              alt={`${icon.label} logo`}
              className="h-4 w-4 md:h-[18px] md:w-[18px] opacity-80"
              loading="lazy"
            />
          </span>
        );
      })}
    </div>
  );
};
