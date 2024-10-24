import React from "react";
import Questions from "../../components/Questions"; 
import { useTranslation } from "react-i18next";

function FaqSection() {
  const { t } = useTranslation();

  const questions = [
    {
      question: t("distributorDesk.subparts.faq.question1"),
      answer: t("distributorDesk.subparts.faq.answer1"),
    },
    {
      question: t("distributorDesk.subparts.faq.question2"),
      answer: t("distributorDesk.subparts.faq.answer2"),
    },
    {
      question: t("distributorDesk.subparts.faq.question3"),
      answer: t("distributorDesk.subparts.faq.answer3"),
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center cinzel-font">
        <h2 className="lg:text-7xl text-3xl  tracking-tight text-[#C49E5F] sm:text-4xl">
          {t("distributorDesk.subparts.faq.heading")}
        </h2>
        <p className="mt-2 text-lg text-gray-500">
          {t("distributorDesk.subparts.faq.subheading")}
        </p>
      </div>

      <div className="mt-16 space-y-8 lg:grid lg:grid-cols-1 lg:gap-8 ">
        {questions.map((question, index) => (
          <Questions
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
