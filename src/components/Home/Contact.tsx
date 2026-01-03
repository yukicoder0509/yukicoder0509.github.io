import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <div className="w-full text-left font-serif">
            <hr className="my-10 w-full border-black" />
            <div className="text-2xl font-bold">Contact</div>
            <div className="mt-2 flex flex-col gap-4 text-lg">
                <span className="flex items-center gap-2">
                    <EnvelopeIcon className="inline-block h-6 w-6" />
                    bendoris0509 [at] gmail.com
                </span>
                <a
                    href="https://github.com/yukicoder0509"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="flex items-center gap-2">
                        <img src="/github-mark.svg" className="size-6" />
                        yukicoder0509
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/yanghaocheng"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="flex items-center gap-2">
                        <img src="/InBug-Black.png" className="size-6" />
                        yanghaocheng
                    </span>
                </a>
            </div>
        </div>
    );
}
