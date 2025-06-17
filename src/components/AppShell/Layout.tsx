import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
