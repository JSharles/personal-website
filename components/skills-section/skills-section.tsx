import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const technicalSkills = [
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Express.js",
    "Solidity",
    "Hardhat",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Serverless",
    "Vercel",
    "Golang",
  ];

  const softSkills = [
    "Product-minded",
    "UX-friendly",
    "Startup-focused",
    "Collaborative",
    "Problem-solving",
    "Autonomous",
    "Communication",
    "Agile mindset",
    "Adaptability",
    "Attention to detail",
    "Deal with ambiguity",
    "Fast-paced environment",
    "International settings",
  ];

  const languages = ["French — Native", "English — B2/C1", "Spanish — A2/B1"];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Technologies & Skills</h2>

        {/* Technical Skills */}
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {technicalSkills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {softSkills.map((skill, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Languages */}
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {languages.map((lang, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
              {lang}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
