import { Project } from "../types/displayInfo.types";
import ProjectCard from "./ProjectCard";

export default function ProjectList({
    projectList,
}: {
    projectList: Project[];
}) {
    return (
        <div className="flex max-w-xl flex-wrap justify-evenly">
            {projectList.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
