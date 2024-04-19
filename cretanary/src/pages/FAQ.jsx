import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mt-4">
      <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-200">
        <p className="font-signature text-lg font-semibold">{question}</p>
        <button onClick={toggleExpanded} className="focus:outline-none">
          {expanded ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      {expanded && (
        <div className="p-4">
          <p className="font-signature text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-[#f8f9fb] p-8 flex flex-col items-center justify-center">
      <div className="pt-6">
        <h1 className="font-signature font-bold text-3xl">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div className="pt-4">
        <p className="text-center text-xl font-signature font-semibold">
          Quick answers to questions you may have. Can’t find what you're
          looking for?
        </p>
        <p className="text-center text-lg text-[#4A508E] font-signature font-semibold pt-2">
          Check out our full documentation
        </p>
      </div>
      <div className="mt-8 w-full max-w-[800px]">
        <FAQItem
          question="Question 1"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 2"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 3"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 4"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 5"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 6"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 7"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 8"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 9"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
        <FAQItem
          question="Question 10"
          answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        />
      </div>
    </div>
  );
};

export default FAQ;
