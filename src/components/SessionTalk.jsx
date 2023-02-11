import SessionTalkBubble from "./SessionTalkBubble";

export default function SessionTalk() {
  const sessionData = [
    {
      info: "Info Session Hackfest 2023",
      title: "Design Thinking",
      date: new Date("2023-02-12"),
      time: "10:00 - 12:00 WIB",
      location: "Zoom",
      url: "https://links.gdsc-hackfest.com/Zoom",
      speakers: [
        {
          name: "Razan Fawwaz",
          title: "PIC GDSC Indonesia",
          image: "public/speakers/razan-fawwaz.png",
        },
        {
          name: "Rizqi Nino Firmansyah",
          title: "UI Designer at Telkom Indonesia, GDG Cloud Bandung",
          image: "public/speakers/rizqi-nino-firmansyah.png",
        },
      ],
    },
    {
      info: "Webinar Session Hackfest 2023",
      title: "Build Impactful Product Through Solution Challenge",
      date: new Date("2023-02-18"),
      time: "01:30 WIB",
      location: "Zoom",
      url: "",
      speakers: [
        {
          name: "R Surahutomo Aziz Pradana",
          title: "Engineering Manager at Bukalapak, GDE",
          image: "public/speakers/surahutomo-aziz-pradana.png",
        }
      ]
    }
  ];

  return (
    <section className="bg-topWords-lines bg-contain border-b-2 border-black py-16">
      <div className="text-center h-full">
        <h2 className="font-gooMed text-title mb-8">Sessions and Tech Talk</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:gap-4 my-4 gap-4 mx-10 sm:mx-0">
          {sessionData.map((session, index) => (
            <SessionTalkBubble key={index} id={index} {...session} />
          ))}
        </div>
      </div>
    </section>
  );
}
