import DynamicHeader from "../section-components/DynamicHeader";
import ProjectCard from "../section-components/ProjectCard";
import repositories from "../../data/projects";

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
        </section>
    )
}