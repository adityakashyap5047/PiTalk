"use client"

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // For the down and up arrows

const AboutUs = () => {
  const faqData = [
    {
      question: "What is PiTalk?",
      answer:
        "PiTalk is a real-time messaging platform designed for developers, learners, and enthusiasts. It offers dedicated forums like Python, JavaScript, and React for asking questions, sharing knowledge, and collaborating.",
    },
    {
      question: "Who can use PiTalk?",
      answer:
        "Anyone interested in programming or technology can join PiTalk! Whether you're a beginner or an experienced developer, PiTalk provides a space for everyone.",
    },
    {
      question: "What features does PiTalk offer?",
      answer:
        "PiTalk offers real-time messaging, multiple forums, file sharing, secure authentication with Clerk, integration with Stream for reliable messaging, a mobile-friendly design, and a respectful community.",
    },
    {
      question: "How do I ask a question or share a file?",
      answer:
        "Select a forum related to your topic and post your message or question. You can also attach files directly while creating your message.",
    },
    {
      question: "How is PiTalk different from other platforms?",
      answer:
        "PiTalk emphasizes real-time collaboration in niche programming communities. With Clerk for secure sign-ins and Stream for high-performance messaging, it’s optimized for seamless discussions.",
    },
    {
      question: "Is PiTalk free to use?",
      answer:
        "Yes! PiTalk is free to join and use. We strive to make the platform accessible while continuously enhancing its features.",
    },
    {
      question: "Can I create my own forum?",
      answer:
        "Currently, forums are curated by our team to focus on popular programming topics. However, we’re working on adding the ability to request new forums.",
    },
    {
      question: "How can I report a problem or give feedback?",
      answer:
        "You can use the 'Contact Us' option in the footer or email us at support@pitalk.com.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gradient-linear from-[#080F58] via-purple-500 to-[#080F58] bg-[length:200%_200%] animate-bg-gradient">
      <div className="container mx-auto px-6 md:px-12">
      <h3 className="text-5xl text-[#0E0E5C] font-semibold text-center flex gap-2 justify-center mb-10">
        About Us
      </h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-sky-700 shadow-md rounded-lg p-4 transition hover:shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-white" />
                ) : (
                  <FiChevronDown className="text-white" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-[#8ec0e8]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
