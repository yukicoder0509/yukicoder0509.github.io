export default function Calendar() {
    return (
        <iframe
            className="h-full w-full"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTaipei&showPrint=0&src=YmVuZG9yaXMwNTA5QGdtYWlsLmNvbQ&src=YWRtaW5Ac2RjLm55Y3UuY2x1Yg&src=Y181ZTExYTM1YjQyMzE3MWQ5ZDkwM2Y5MmZmNTRjMmExN2Q1YzMzZWM3N2YxMWJhMDBlMDc5NjIxNGJjOTNlNWZmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=cmYxNGQwazZjZnN0ZG5hYzNiaWdxdjcyaG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=emgtdHcudGFpd2FuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%23f6bf26&color=%23a79b8e&color=%234285f4&color=%230b8043"
            style={{ border: "solid 1px #777" }}
            frameBorder="0"
            scrolling="no"
        ></iframe>
    );
}
