import React, { useState } from 'react';
import Questions from '../../components/Questions'; // Adjust the path according to your file structure

function FaqSection() {
  const [questions] = useState([
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius '
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
