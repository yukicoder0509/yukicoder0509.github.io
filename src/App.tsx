import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { Layout } from "./components/Layout";

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
            </Route>,
        ),
    );
    return <RouterProvider router={router} />;
}
