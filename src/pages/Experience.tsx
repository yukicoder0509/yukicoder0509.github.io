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
                <h2 className="text-2xl font-semibold">Projects</h2>
                <ul>
                    <h2 className="mb-2.5 text-xl font-semibold">
                        Clustron - A Heterogeneous Cluster Management Platform
                    </h2>
                    <ul>
                        <li>
                            {" "}
                            Leading a team of 7 to develop a heterogeneous
                            cluster management system used by students and
                            professors.{" "}
                        </li>
                        <li className="flex items-center gap-1">
                            <img
                                src="/github-mark.svg"
                                alt="GitHub Logo"
                                className="size-4"
                            />
                            <a href="https://github.com/NYCU-SDC/clustron-frontend">
                                Clustron Frontend
                            </a>
                        </li>
                        <li className="flex items-center gap-1">
                            <img
                                src="/github-mark.svg"
                                alt="GitHub Logo"
                                className="size-4"
                            />
                            <a href="https://github.com/NYCU-SDC/clustron-backend">
                                Clustron Backend
                            </a>
                        </li>
                    </ul>
                    <h2 className="mb-2.5 text-xl font-semibold">
                        Summer - An Opensourced Go RESTful API Library
                    </h2>
                    <h2 className="mb-2.5 text-xl font-semibold">
                        CommonGround - An Experimental Social Platform
                    </h2>
                </ul>
                <h2 className="text-2xl font-semibold">Awards</h2>
            </div>
        </>
    );
}
