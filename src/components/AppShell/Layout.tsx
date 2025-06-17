import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import MotionBackground from "./MotionBackground.tsx";

export function Layout() {
    return (
        <>
            <Header />
            <MotionBackground />
            <Outlet />
        </>
    );
}
