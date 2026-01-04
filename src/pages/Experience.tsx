import { Helmet } from "react-helmet";

export default function Experience() {
    return (
        <>
            <Helmet>
                <title>Experience</title>
            </Helmet>
            <div className="mx-auto mt-2.5 flex h-full max-w-5xl flex-col gap-4 px-5">
                <h1 className="mb-5 text-3xl font-bold">Experience</h1>
                <h2 className="text-2xl font-semibold">Education</h2>
                <ul>
                    <li>
                        Bachelor, Department of Computer Science, National Yang
                        Ming Chiao Tung University (NYCU), Hsinchu, Taiwan
                    </li>
                </ul>
                <hr />
                <h2 className="text-2xl font-semibold">Skills</h2>
                <ul>
                    <li className="flex flex-col justify-between sm:flex-row">
                        <span className="font-semibold">
                            Programming Languages:{" "}
                        </span>
                        <span>Python, TypeScript / JavaScript, C++, C, Go</span>
                    </li>
                    <li className="flex flex-col justify-between sm:flex-row">
                        <span className="font-semibold">
                            Techniques and Frameworks:{" "}
                        </span>
                        <span>
                            React, Vite, React Router, React Query, TailwindCSS
                        </span>
                    </li>
                    <li className="flex flex-col justify-between sm:flex-row">
                        <span className="font-semibold">Tools: </span>
                        <span>
                            Docker, Git, PostgreSQL, Traefik, CI/CD (GitHub
                            Actions), Jira, Linux
                        </span>
                    </li>
                </ul>
                <hr />
                <h2 className="text-2xl font-semibold">Projects</h2>
                <ul className="flex flex-col gap-4">
                    <li>
                        <h2 className="text-xl font-semibold">
                            Clustron - A Heterogeneous Cluster Management
                            Platform
                        </h2>
                        <p className="italic">
                            Product manager, Full-stack developer
                        </p>
                        <ul>
                            <li className="mb-2">
                                Leading a team of 7 to develop a heterogeneous
                                cluster management system used by students and
                                professors.
                            </li>
                            <li>
                                <GitHubLink
                                    url="https://github.com/NYCU-SDC/clustron-frontend"
                                    display="Clustron Frontend"
                                />
                            </li>
                            <li>
                                <GitHubLink
                                    url="https://github.com/NYCU-SDC/clustron-backend"
                                    display="Clustron Backend"
                                />
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h2 className="text-xl font-semibold">
                            Summer - An Opensourced Go RESTful API Library
                        </h2>
                        <p className="italic">Backend, Library Co-architect</p>
                        <ul>
                            <li className="mb-2">
                                Co-architected a shared Go RESTful API library
                                utilized by 4 internal club projects. Accelerate
                                setup time by 80%.
                            </li>
                            <li>
                                <GitHubLink
                                    url="https://github.com/NYCU-SDC/summer"
                                    display="Summer"
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold">
                            CommonGround - An Experimental Social Platform
                        </h2>
                        <p className="italic">Frontend Developer</p>
                        <ul>
                            <li className="mb-2">
                                Developer friendly front-end architecture for a
                                social platform using React/TypeScript,
                                enhancing user interaction and component
                                reusability.
                            </li>
                            <li>
                                <GitHubLink
                                    url="https://github.com/commonground-project/frontend"
                                    display="CommonGround Frontend"
                                />
                            </li>
                            <li>
                                <GitHubLink
                                    url="https://github.com/commonground-project/backend"
                                    display="CommonGround Backend"
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <h2 className="text-2xl font-semibold">Awards</h2>
                <ul>
                    <li>
                        2025 3rd place out of 7 teams in the Meichu Hackathon
                        (TSMC group)
                    </li>
                    <li>
                        2024 Scholarship for Core Foundational Course
                        Enrollment: Linear Algebra
                    </li>
                </ul>
            </div>
        </>
    );
}

function GitHubLink({ url, display }: { url: string; display: string }) {
    return (
        <div className="flex items-center gap-1">
            <img src="/github-mark.svg" alt="GitHub Logo" className="size-4" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {display}
            </a>
        </div>
    );
}
