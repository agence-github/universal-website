import React, { useState } from 'react';
import Questions from '../../components/Questions'; // Adjust the path according to your file structure

function FaqSection() {
  const [questions] = useState([
    {
      question: 'What shall one get to do so as to become a distributor?',
      answer: ' In order to qualify for being a distributor in Universal Distributor LLC, the customers must meet some set stipulations such as, as a past experience in the consumer goods field and adherence to our brand ethos. If you require additional details please feel free to call our sales department.'
    },
    {
      question: 'How do I place an order?',
      answer: ' Login details are available on our distributor portal where you can follow the easy steps to place your order. We also have our customer service personnel taking care of the orders and serving your needs.'
    },
    {
      question: 'Is it possible to get products samples? ',
      answer: 'Yes, this company does provide product samples especially to those distributors who meet the standard of this company. Concerning samples, please contact the company to speak to our sales team.'
    }
  ]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center cinzel-font">
        <h2 className="lg:text-7xl text-3xl  tracking-tight text-[#C49E5F] sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-2 text-lg text-gray-500">
        LOREM IPSUM DOLOR SIT AMET.
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
