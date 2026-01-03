import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Calendar from "./pages/Calendar.tsx";
import { Layout } from "./components/AppShell/Layout.tsx";
import Experience from "./pages/Experience.tsx";

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>,
        ),
    );
    return <RouterProvider router={router} />;
}
