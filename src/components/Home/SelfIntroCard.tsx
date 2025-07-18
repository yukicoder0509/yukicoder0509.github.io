export default function SelfIntroCard() {
    return (
        <div className="flex w-full flex-col items-center gap-7 md:flex-row-reverse md:justify-between">
            <img
                src="https://www.gravatar.com/avatar/fbf80edc9ed4b30956a6532006dd8166?s=400&d=identicon"
                alt="Bendoris"
                loading="lazy"
                className="size-40 rounded-full md:size-50"
            />
            <div className="font-serif text-xl md:max-w-1/2">
                <p>
                    Currently study Computer Science at National Yang Ming Chiao
                    Tung University, Taiwan. I am a Frontend Engineer with a
                    passion for education and open source. I love to create
                    things that make people’s lives easier and more enjoyable.
                </p>
                <p>
                    I serve in NYCU Software Development Club as a frontend
                    developer, education, and project manager. We aim to build
                    welcoming community for students to learn and grow together.
                </p>
            </div>
        </div>
    );
}
