"use client";
import { useState } from "react";

interface QuestionProps {
  question: string;
  answer: string;
  bullets?: string[];
}

const Question: React.FC<QuestionProps> = ({ question, answer, bullets }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      onClick={() => setHidden(!hidden)}
      className="w-full flex flex-col cursor-pointer gap-1 px-10"
    >
      <div className="relative flex w-full py-4 items-center border-b border-b-[#656b7f]">
        <h1 className="text-lg text-[#656b7f] w-3/4 font-semibold">
          {question}
        </h1>
        {hidden
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-neutral-400 absolute right-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )
          : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-[#656b7f] absolute right-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
      </div>
      <div
        className={`py-2 ${hidden ? "hidden" : "flex"} flex-col`}
      >
        <p className="text-[#656b7f] text-sm">{answer}</p>
        {bullets
          ? (
            <ol className="list-disc">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="text-[#656b7f] text-sm">{bullet}</li>
              ))}
            </ol>
          )
          : null}
      </div>
    </div>
  );
};

export default Question;
