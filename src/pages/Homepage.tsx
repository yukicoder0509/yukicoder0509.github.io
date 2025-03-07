import myProjectData from "../data/Projects.json";
import ProjectList from "../components/ProjectList";

export default function Homepage() {
    const projects = myProjectData.MyProjects;

    return (
        <div className="flex h-full flex-col items-center">
            <div className="mt-4 max-w-xl rounded-lg bg-blue-200 p-4">
                <h1 className="text-lg font-bold">About Me</h1>
                <p className="mt-2">
                    I'm 楊皓程. Study in CS dept, National Yang Ming Chiao Tung
                    University, Taiwan. Currently focus on web development, and
                    heading toward a full-stack developer.
                </p>
            </div>
            <ProjectList projectList={projects} />
        </div>
    );
}
