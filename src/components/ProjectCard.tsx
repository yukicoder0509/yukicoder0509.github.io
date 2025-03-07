import { Project } from "../types/displayInfo.types";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="mt-4 max-w-xs rounded-lg bg-neutral-200 p-4">
            <h2 className="font-semibold">{project.title}</h2>
            <p className="py-2">{project.description}</p>
            {project.image ? (
                <img src={project.image} alt={project.title} />
            ) : null}
            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="transition-color rounded-full bg-neutral-300 px-2 py-1 text-sm duration-300 hover:bg-neutral-100 hover:text-emerald-600"
            >
                {project.link}
            </a>
        </div>
    );
}
