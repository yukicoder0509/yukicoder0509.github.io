export default function SelfIntroCard() {
    return (
        <div className="flex w-full flex-col items-center gap-7 md:flex-row-reverse md:justify-between">
            <img
                src="https://www.gravatar.com/avatar/fbf80edc9ed4b30956a6532006dd8166?s=400&d=identicon"
                alt="Bendoris"
                loading="lazy"
                className="size-40 rounded-full md:size-50"
            />
            {/* Desktop version full self intro*/}
            <div className="hidden font-serif text-xl md:block md:max-w-10/12">
                <h1 className="font-semibold">About Me</h1>
                <p>
                    I’m currently studying Computer Science at National Yang
                    Ming Chiao Tung University, Taiwan. My journey in tech
                    started from a love for creating things that are both
                    functional and delightful.
                </p>
                <h1 className="mt-8 font-semibold">What I Do</h1>
                <p>
                    As a frontend engineer, I’m passionate about education and
                    open source. I believe great software isn’t just about
                    code—it’s about empowering people. That’s why I’ve
                    contributed to educational tools, led frontend initiatives,
                    and mentored students through the NYCU Software Development
                    Club, where I help run training programs and manage real
                    production projects.
                </p>
                <p className="mt-4">
                    I’m especially drawn to problems where engineering meets
                    design, and where empathy meets execution. Whether it’s
                    building internal tools that save people hours, or writing
                    guides that help beginners take their first step—I want to
                    be the kind of developer who leaves things better than I
                    found them.
                </p>
            </div>
            {/* Mobile version compact self intro */}
            <div className="block font-serif text-xl md:hidden">
                <h1 className="font-semibold">About Me</h1>
                <p>
                    Currently studying CS @ NYCU and leading frontend
                    initiatives in our software dev club.
                </p>
                <h1 className="mt-8 font-semibold">What I Do</h1>
                <p>
                    Frontend engineer. Educator. Builder of things that
                    (hopefully) make life better.
                </p>
            </div>
        </div>
    );
}
