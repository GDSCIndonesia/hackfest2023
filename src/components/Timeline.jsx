import TimeBox from "./TimeBox";

export default function Timeline() {
  const timeData = [
    {
      title: "Website is Coming Soon",
      dateFrom: new Date("2023-01-17"),
      dateTo: new Date("2023-02-05"),
    },
    {
      title: "Google HackFest is Coming",
      dateFrom: new Date("2023-02-06"),
      dateTo: new Date("2023-03-08"),
    },
    {
      title: "TBA",
      dateFrom: new Date("2023-02-01"),
      dateTo: new Date("2023-02-01"),
    },
    {
      title: "TBA",
      dateFrom: new Date("2023-02-01"),
      dateTo: new Date("2023-02-03"),
    },
    {
      title: "TBA",
      dateFrom: new Date("2023-02-01"),
      dateTo: new Date("2023-02-03"),
    },
    {
      title: "TBA",
      dateFrom: new Date("2023-02-01"),
      dateTo: new Date("2023-02-03"),
    },
    {
      title: "TBA",
      dateFrom: new Date("2023-02-01"),
      dateTo: new Date("2023-02-03"),
    },
    {
      title: "TBA",
      dateFrom: new Date("2023-02-01"),
      dateTo: new Date("2023-02-03"),
    },
  ];
  
  return (
    <section className="border-b-2 border-black py-16">
      <div className="container mx-auto">
        <div className="text-center h-full">
          <h2 className="font-gooBold text-4xl mb-8">Timeline</h2>
          <p className="font-gooReg text-lg mb-8">
            Current Timeline, might change in the future.
          </p>
        </div>
        <div className="border border-black">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {timeData.map((data, index) => {
              return <TimeBox key={index} {...data} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
