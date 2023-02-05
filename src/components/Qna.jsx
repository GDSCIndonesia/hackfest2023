import { useState } from "react";

export default function Qna({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4 border border-black">
      <div
        className="border border-black bg-white flex justify-between items-center hover:cursor-pointer px-4 py-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="font-gooMed text-detail">{question}</p>
        <span className="font-gooBold text-xl leading-none select-none ml-4">
          {isExpanded ? "-" : "+"}
        </span>
      </div>
      {isExpanded ? (
        <div
          className={
            "border border-black bg-white flex justify-between items-center px-4 py-2 text-detail"
          }
        >
          <p className="font-gooReg">{answer}</p>
        </div>
      ) : null}
    </div>
  );
}
