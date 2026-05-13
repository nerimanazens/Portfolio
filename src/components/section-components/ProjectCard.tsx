import { icons } from "../../data/icons";

export default function ProjectCard({
  title,
  description,
  techStack,
}: {
  title: string;
  description: string;
  techStack: string[];
}) {
  return (
    <div className="bg-[#151D29] p-6 rounded-lg border-[#0F99A1] border w-300 mx-auto drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex space-x-2">
        {techStack.map((tech) => {
          const Icon = icons[tech];

          return Icon ? (
            <Icon key={tech} className="w-6 h-6 text-white" />
          ) : null;
        })}
      </div>
    </div>
  );
}