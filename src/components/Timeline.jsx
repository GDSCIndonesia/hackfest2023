import TimeBox from "./TimeBox";

export default function Timeline() {
  const timeData = [
    {
      title: "Open Registration",
      dateFrom: new Date("2023-02-06"),
      dateTo: new Date("2023-02-16"),
    },
    {
      title: "Webinar Info Session",
      dateFrom: new Date("2023-02-12"),
      dateTo: new Date("2023-02-12"),
    },
    {
      title: "Technical Meeting",
      dateFrom: new Date("2023-02-17"),
      dateTo: new Date("2023-02-17"),
    },
    {
      title: "Webinar",
      dateFrom: new Date("2023-02-18"),
      dateTo: new Date("2023-02-18"),
    },
    {
      title: "Submission Proposal",
      dateFrom: new Date("2023-02-19"),
      dateTo: new Date("2023-02-21"),
    },
    {
      title: "Proposal Selection",
      dateFrom: new Date("2023-02-22"),
      dateTo: new Date("2023-02-23"),
    },
    {
      title: "Announcement Proposal Selection",
      dateFrom: new Date("2023-02-24"),
      dateTo: new Date("2023-02-24"),
    },
    {
      title: "Develop Solution/Apps",
      dateFrom: new Date("2023-02-24"),
      dateTo: new Date("2023-03-04"),
    },
    {
      title: "Demo Submission Solution/Apps",
      dateFrom: new Date("2023-03-04"),
      dateTo: new Date("2023-03-04"),
    },
    {
      title: "Solution/Apps Judgement",
      dateFrom: new Date("2023-03-05"),
      dateTo: new Date("2023-03-07"),
    },
    {
      title: "Top 10 Solution/Apps Announcement",
      dateFrom: new Date("2023-03-08"),
      dateTo: new Date("2023-03-08"),
    },
    {
      title: "Continue Developing",
      dateFrom: new Date("2023-03-09"),
      dateTo: new Date("2023-03-17"),
    },
    {
      title: "Final Pitching and Winner Announcement",
      dateFrom: new Date("2023-03-18"),
      dateTo: new Date("2023-03-18"),
    }
  ];
  
  return (
    <section className="bg-topWords-lines bg-contain border-b-2 border-black py-16">
      <div className="container mx-auto">
        <div className="text-center h-full">
          <h2 className="font-gooBold text-title mb-8">Timeline</h2>
          {/* <p className="font-gooReg text-detail mb-8">
            Current Timeline, might change in the future.
          </p> */}
        </div>
        <div className="border border-black mx-10 sm:mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {timeData.map((data, index) => {
              return <TimeBox key={index} id={index} {...data} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
