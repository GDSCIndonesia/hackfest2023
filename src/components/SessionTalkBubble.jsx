export default function SessionTalkBubble({
  id,
  info,
  title,
  date,
  time,
  location,
  url,
  speakers,
}) {
  return (
    <div
      className={
        "flex flex-col p-8 py-12 border-2 border-black rounded-2xl m-2 " +
        (id % 2 == 0 ? "bg-gooYellow-900" : "bg-gooBlue-900 ")
      }
    >
      <div className="mb-8">
        <div className="flex justify-between relative">
          <h3 className="font-gooMed text-md md:text-lg leading-none">{info}</h3>
        </div>
        <p className="font-gooBold text-xl xl:text-2xl">{title}</p>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-4 h-full items-end">
        {speakers.map((speaker) => (
          <div className={"flex flex-col items-center " + (speakers.length == 1 ? "col-span-2" : "" )}>
            <div className="bg-black aspect-1 h-24 sm:h-28 rounded-full border-2 border-black mb-4">
              <img
                className={
                  "rounded-full object-cover w-full h-full " +
                  (speaker.image ? "" : "hidden")
                }
                src={speaker.image}
                alt={speaker.name + " profile"}
              />
            </div>
            <p className="bg-white font-gooReg text-xs sm:text-sm border-2 border-black rounded-full p-1 px-3 truncate">
              {speaker.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-between items-end">
        <div className="flex flex-wrap gap-2">
          <p className="font-gooReg text-xs sm:text-sm bg-white border-2 border-black rounded-full p-1 px-3 w-max flex justify-center items-center">
            {date.toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-gooReg text-xs sm:text-sm bg-white border-2 border-black rounded-full p-1 px-3 w-max flex justify-center items-center">
            {time}
          </p>
          <p className="font-gooReg text-xs sm:text-sm bg-white border-2 border-black rounded-full p-1 px-3 w-max flex justify-center items-center">
            {location}
          </p>
        </div>
        <a className={"relative " + (url ? "" : "hidden")} href={url} target="_blank">
          <span className="font-gooReg aspect-1 h-6 sm:h-8 bg-white border-2 border-black rounded-full flex justify-center items-center absolute right-0 bottom-0">
            <span className="scale-90 sm:scale-100">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8137 0.686291C12.8137 0.41015 12.5899 0.186292 12.3137 0.186291L7.81371 0.186292C7.53757 0.186292 7.31371 0.410149 7.31371 0.686292C7.31371 0.962434 7.53757 1.18629 7.81371 1.18629L11.8137 1.18629L11.8137 5.18629C11.8137 5.46243 12.0376 5.68629 12.3137 5.68629C12.5899 5.68629 12.8137 5.46243 12.8137 5.18629L12.8137 0.686291ZM1.35355 12.3536L12.6673 1.03985L11.9602 0.332738L0.646447 11.6464L1.35355 12.3536Z"
                  fill="black"
                />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
