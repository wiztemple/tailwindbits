"use client";

import React, { useEffect, useState } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

function AccordionComponent({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div>
      <h2>
        <button
          className="flex items-center justify-between w-full font-medium text-left text-sm px-4 py-3 gap-3 tracking-[1px] leading-5"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`block ${
              accordionOpen ? "text-blue-700" : "text-gray-800"
            }`}
          >
            {title}
          </span>
          {accordionOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C4.47059 20 0 15.5294 0 10C0 4.47059 4.47059 0 10 0C15.5294 0 20 4.47059 20 10C20 15.5294 15.5294 20 10 20ZM10 1.17647C5.11765 1.17647 1.17647 5.11765 1.17647 10C1.17647 14.8824 5.11765 18.8235 10 18.8235C14.8824 18.8235 18.8235 14.8824 18.8235 10C18.8235 5.11765 14.8824 1.17647 10 1.17647Z"
                fill="#9095B1"
              />
              <path
                d="M4.70581 9.41177H15.294V10.5882H4.70581V9.41177Z"
                fill="#9095B1"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C4.47059 20 0 15.5294 0 10C0 4.47059 4.47059 0 10 0C15.5294 0 20 4.47059 20 10C20 15.5294 15.5294 20 10 20ZM10 1.17647C5.11765 1.17647 1.17647 5.11765 1.17647 10C1.17647 14.8824 5.11765 18.8235 10 18.8235C14.8824 18.8235 18.8235 14.8824 18.8235 10C18.8235 5.11765 14.8824 1.17647 10 1.17647Z"
                fill="#9095B1"
              />
              <path
                d="M4.70581 9.4118H15.294V10.5883H4.70581V9.4118Z"
                fill="#9095B1"
              />
              <path
                d="M9.41187 4.70587H10.5883V15.2941H9.41187V4.70587Z"
                fill="#9095B1"
              />
            </svg>
          )}
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-4 bg-slate-50 border-t border-t-slate-200">
          <div className="pb-6 pt-4 sm:text-base text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

const Accordionv2 = () => {
  const faqs = [
    {
      title: "What is the pricing structure for your SaaS product?",
      text: (
        <>
          <p className="text-sm leading-6">
            Our SaaS product offers three pricing tiers: Basic, Pro, and
            Enterprise. The Basic plan starts at $10 per month and includes
            essential features. The Pro plan is $30 per month, offering advanced
            features and integrations. The Enterprise plan is custom-priced to
            fit large organizations' needs, including premium support and
            additional customizations. Discounts are available for annual
            subscriptions.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "How secure is my data with your SaaS product?",
      text: (
        <>
          <p className="text-sm leading-6">
            Security is our top priority. We use industry-standard encryption to
            protect your data both in transit and at rest. Our servers are
            hosted in secure data centers with 24/7 monitoring and regular
            security audits. Additionally, we comply with major data protection
            regulations such as GDPR and HIPAA to ensure your information
            remains confidential and secure.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Can I integrate your SaaS product with other tools we use?",
      text: (
        <>
          <p className="text-sm leading-6">
            Yes, our SaaS product offers robust integration capabilities with a
            variety of third-party tools. We provide APIs and pre-built
            integrations for popular services like CRM systems, email marketing
            platforms, and project management tools. If you need a specific
            integration not currently supported, our development team can work
            with you to create a custom solution.
          </p>
        </>
      ),
      active: false,
    },
  ];
  return (
    <section className="sm:w-[600px] w-full">
      <div className="divide-y divide-slate-200 shadow mt-5 rounded-lg">
        {faqs.map((faq, index) => (
          <AccordionComponent
            key={index}
            title={faq.title}
            id={`faqs-${index}`}
            active={faq.active}
          >
            {faq.text}
          </AccordionComponent>
        ))}
      </div>
    </section>
  );
};

export default Accordionv2;
