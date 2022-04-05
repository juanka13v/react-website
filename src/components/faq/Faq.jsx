import React from "react";
import "./Faq.css";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import { questions } from "./data";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQS</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            tempore suscipit quae ipsum nobis. Quod accusantium distinctio totam
            non hic minus.
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => {
            return <Question
              title={question.title}
              key={question.id}
              answer={question.answer}
            />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
