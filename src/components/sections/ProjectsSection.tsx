import DynamicHeader from "../section-components/DynamicHeader"
import ProjectCard from "../section-components/ProjectCard"
import 

export default function ProjectsSection() {
    return (
        <div className="mt-16">
            <DynamicHeader header="<Projects />" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            </div>
        </div>
    )
}