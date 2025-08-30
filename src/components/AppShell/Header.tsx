import { Link } from "react-router";

export default function Header() {
    return (
        <div className="hidden h-20 w-full items-center justify-end gap-5 px-10 py-2.5 font-sans text-xl md:flex">
            <Link to="/">Projects</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/">About</Link>
        </div>
    );
}
