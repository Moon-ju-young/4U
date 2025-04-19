import { useState } from "react";
// import Badge from "./Badge";
// import Reaction from "./Reaction";
import FeedCardQuestion from "./FeedCardQuestion";
import FeedCardAnswer from "./FeedCardAnswer";
import IconMore from "../assets/icons/more.svg?react";

function FeedCard({ isAnswerPage, subject, question }) {
  const [state, setState] = useState(
    (function getState() {
      if (question?.answer) {
        return question.answer.isRejected ? "rejected" : "sent";
      } else {
        return isAnswerPage ? "empty" : "none";
      }
    })(),
  );

  try {
    if (!question) throw Error("Question does not exist");
    if (!subject) throw Error("Subject does not exist");

    return (
      <div className="tablet:gap-32 tablet:p-32 shadow-1pt font-regular text-grayscale-60 bg-grayscale-10 flex flex-col gap-24 rounded-2xl p-24">
        <div className="flex justify-between">
          {/* <Badge /> */}
          {isAnswerPage && <IconMore className="size-26" />}
        </div>
        <FeedCardQuestion
          content={question.content}
          createdAt={question.createdAt}
        />
        {state === "none" || (
          <FeedCardAnswer
            state={state}
            setState={setState}
            subject={subject}
            answer={question.answer}
          />
        )}
        <div className="border-grayscale-30 h-43 border-t border-solid">
          {/* <Reaction like={question.like} dislike={question.dislike} /> */}
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
    return;
  }
}

export default FeedCard;
