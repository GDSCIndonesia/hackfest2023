import Profile from "./Profile";

export default function Mentor() {
  const mentorData = [
    {
      name: "Ananda Dwi Rahmawati",
      position: "Senior Cloud Engineer PT Boer Technology",
      image: "/libraries/images/mentors/Ananda-Dwi-Rahmawati.jpg",
    },
    {
      name: "Guntur Sarwohadi",
      position: "Chief of Game, Wyndblast",
      image: "/libraries/images/mentors/Guntur-Sarwohadi.jpeg",
    },
    {
      name: "Haidar Zamzam",
      position: "Mobile Developer at Riliv, Co Organizer GDG Surabaya",
      image: "/libraries/images/mentors/Haidar-Zamzam.jpeg",
    },
    {
      name: "Ibnu S. Wardy",
      position: "Founder & Chairman at GITS Indonesia",
      image: "/libraries/images/mentors/Ibnu-Sina-Wardy.jpeg",
    },
    {
      name: "M Ray Rizaldy",
      position: "CEO Gits indonesia",
      image: "/libraries/images/mentors/Ray-Rizaldy.jpeg",
    },
    {
      name: "Patrick Nugroho",
      position: "Managing Director at Selaksa",
      image: "/libraries/images/mentors/Patrick-Nugroho.jpeg",
    },
    {
      name: "Prabu Rangki",
      position: "Software Engineer at Kintell",
      image: "/libraries/images/mentors/Prabu-Rangki.jpeg",
    },
    {
      name: "Raihan Suraperwata",
      position: "Software Engineer at Tokopedia",
      image: "/libraries/images/mentors/Raihan-Suraperwata.jpeg",
    },
    {
      name: "Rendra Toro",
      position: "Technology Consultant at Indosat Business",
      image: "/libraries/images/mentors/Rendra-Toro.jpeg",
    },
    {
      name: "Riza Fahmi",
      position: "GDE Web, Co-Founder at Hacktiv8 Indonesia",
      image: "/libraries/images/mentors/Riza-Fahmi.jpg",
    },
    {
      name: "Veronica Anggraini",
      position: "Software Engineer (Android) at Line Bank",
      image: "/libraries/images/mentors/Veronica-Anggraini.jpeg",
    },
  ];

  return (
    <section className="border-b-2 border-black bg-gooYellow-500 py-16">
      <div className="text-center h-full">
        <h2 className="font-gooMed text-title mb-8">Mentors</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-12 my-4 m-10 sm:mx-0">
          {mentorData.map((data, index) => {
            return <Profile key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
}
