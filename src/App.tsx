import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Calendar from "./pages/Calendar.tsx";
import { Layout } from "./components/AppShell/Layout.tsx";

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/calendar" element={<Calendar />} />
            </Route>,
        ),
    );
    return <RouterProvider router={router} />;
}
