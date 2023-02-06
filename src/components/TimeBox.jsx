export default function TimeBox({ id, title, dateFrom, dateTo }) {
  dateFrom.setHours(0, 0, 0);
  dateTo.setHours(23, 59, 59);

  const dayFrom = dateFrom.toLocaleString("default", { day: "2-digit" });
  const dayTo = dateTo.toLocaleString("default", { day: "2-digit" });
  const monthFrom = dateFrom.toLocaleString("default", { month: "long" });
  const monthTo = dateTo.toLocaleString("default", { month: "long" });

  const year = dateFrom.toLocaleString("default", { year: "numeric" });

  let time1;
  let time2;

  if (
    dateFrom.getDay() === dateTo.getDay() &&
    dateFrom.getMonth() === dateTo.getMonth()
  ) {
    time1 = `${dayFrom} ${monthFrom}`;
    time2 = `${year}`;
  } else if (dateFrom.getMonth() === dateTo.getMonth()) {
    time1 = `${dayFrom} - ${dayTo}`;
    time2 = `${monthFrom} ${year}`;
  } else {
    time1 = `${dayFrom} ${monthFrom} - ${dayTo} ${monthTo}`;
    time2 = `${year}`;
  }

  const isToday = new Date() >= dateFrom && new Date() <= dateTo;

  return (
    <div
      className={
        "border border-black w-full aspect-w-1 aspect-h-1 " +
        (isToday ? "bg-gooYellow-900 " : "bg-white ") + 
        (id === 12 ? "lg:col-span-4 lg:aspect-w-4 sm:col-span-2 sm:aspect-w-2" : "")
      }
    >
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h3 className="font-gooBold text-xl 2xl:text-2xl mb-8">
          {title}
        </h3>
        <p className="font-gooReg text-xl 2xl:text-2xl">{time1}</p>
        <p className="font-gooReg text-xl 2xl:text-2xl">{time2}</p>
      </div>
    </div>
  );
}
