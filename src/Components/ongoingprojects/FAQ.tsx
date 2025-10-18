import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are all Sadhisha properties legally approved?",
      answer:
        "Yes. All our land parcels are verified with clear titles and approvals, including DTCP and RERA where applicable. We ensure full legal transparency in every transaction.",
    },
    {
      question: "Can I purchase a plot as a non-resident Indian (NRI)?",
      answer:
        "Yes, NRIs can purchase residential and commercial plots in India. We assist with all documentation and legal requirements to make the process smooth for overseas buyers.",
    },
    {
      question: "What are the minimum and maximum plot sizes available?",
      answer:
        "Our plots range from compact 1,200 sq. ft. lifestyle plots to expansive multi-acre estates. We offer flexible options to suit different investment goals and budgets.",
    },
    {
      question: "Do you offer site visits or virtual tours?",
      answer:
        "Yes, we offer both physical site visits and virtual tours. Our team can arrange a personalized visit to help you explore the locations and understand the investment potential.",
    },
    {
      question: "Are your properties close to the beach or Auroville?",
      answer:
        "Yes, we have premium properties near ECR beachfront (within 100-500 meters) and in the serene Auroville region, offering both coastal and eco-sanctuary living options.",
    },
    {
      question: "What is the payment process?",
      answer:
        "We offer flexible payment plans including one-time payment and installment options. Our team will guide you through the entire payment and documentation process with complete transparency.",
    },
    {
      question: "Can I build immediately after purchase?",
      answer:
        "Yes, most of our plots are ready for immediate registration and construction. We ensure all necessary approvals are in place so you can begin building your dream home right away.",
    },
    {
      question: "Do you help with construction or villa development?",
      answer:
        "Yes, we have a reliable network of architects, contractors, and construction professionals who can help you design and build your dream villa or resort on your plot.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="h4 fw-bold text-center mb-5">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item border mb-2">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <span className="fw-semibold">
                        {index + 1}. {faq.question}
                      </span>
                    </button>
                  </h2>
                  {openIndex === index && (
                    <div className="accordion-body text-muted">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
