import DynamicHeader from "../section-components/DynamicHeader";
import ProjectCard from "../section-components/ProjectCard";
import repositories from "../../data/projects";
import {icons} from "../../data/icons";

export default function ProjectsSection() {
    return (
        <section className="mt-15 w-300 mx-auto">
            <DynamicHeader header="<Projects />" />
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {repositories.map((repo, index) => (
                    <ProjectCard
                        key={index}
                        name={repo.name}
                        description={repo.description}
                        image={repo.image}
                        techStack={repo.techStack}
                        link={repo.link}
                    />
                ))}
            </div>
            <a href="https://github.com/nerimanazens" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#3D4046] text-[#e4e9f1] border font-bold  w-fit py-1 px-4 m-4 rounded-lg hover:bg-[#0F99A1] transition-colors duration-300 mx-auto mt-4">
                < icons.github.icon className="mr-2" />
                For more projects, visit my GitHub
            </a>
        </section>
    )
}