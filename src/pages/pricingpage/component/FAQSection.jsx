import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I purchase 4 Rays Solution?",
      answer: `
        Slack AI is available to purchase as an add-on for all paid plans. Here's how to buy Slack AI:
        • If you haven’t signed up for Slack, create a workspace to get started. You can upgrade your workspace
          and purchase the Slack AI add-on at the same time. To do so, select a paid plan and then click With Slack AI.
        • If you’re on the Pro or Business+ plan, sign in to your account and click Get Slack AI on the Pricing page.
        On Enterprise Grid? Reach out to your Slack account executive or contact our Sales team.
      `,
    },
    // Add more FAQs here as needed
  ];

  return (
    <div className="max-w-2xl mx-auto my-10 p-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        Frequently asked <span className="text-red-600">questions</span>
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-800"
          >
            {faq.question}
            {openIndex === index ? (
              <FaChevronUp className="text-red-600" />
            ) : (
              <FaChevronDown className="text-red-600" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-4 text-gray-600 whitespace-pre-line">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      <div className="text-center mt-8">
        <a href="#" className="text-red-600 font-semibold">
          Get more information on billing at 4 Rays
        </a>
      </div>
    </div>
  );
}

export default FAQSection;
