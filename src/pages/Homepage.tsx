import { Helmet } from "react-helmet";
import WelcomeTitle from "../components/Home/WelcomeTitle.tsx";
import SelfIntroCard from "../components/Home/SelfIntroCard.tsx";

export default function Homepage() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="mx-auto mt-2.5 flex h-full max-w-4xl flex-col items-center px-5">
                <div className="my-9 w-full">
                    <WelcomeTitle />
                </div>
                <div className="mx-6 my-9 w-full md:mx-0">
                    <SelfIntroCard />
                </div>
            </div>
        </>
    );
}
