import Profile from "./Profile";

export default function Mentor() {
  const mentorData = [
    {
      name: "Muhammad Razan Fawwaz",
      position: "Google HackFest 2023 Lead",
      image: "",
    },
    {
      name: "Robert Theo",
      position: "Google HackFest 2023 Tech Lead",
      image: "",
    },
    {
      name: "Nico Abel Laia",
      position: "Google HackFest 2023 Tech Member",
      image: "",
    },
    {
      name: "Haris Daffa",
      position: "Google HackFest 2023 Tech Member",
      image: "",
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
