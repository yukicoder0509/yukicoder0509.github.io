import { Helmet } from "react-helmet";

export default function Calendar() {
    return (
        <>
            <Helmet>
                <title>Calendar</title>
            </Helmet>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTaipei&showPrint=0&src=YmVuZG9yaXMwNTA5QGdtYWlsLmNvbQ&color=%23039be5"
                style={{ border: "solid 1px #777" }}
                className="h-full w-full"
                frameBorder="0"
                scrolling="no"
            ></iframe>
        </>
    );
}
