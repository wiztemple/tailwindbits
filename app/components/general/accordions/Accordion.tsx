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
    <div className="py-2">
      <h2>
        <button
          className="flex items-center w-full font-bold text-left sm:text-lg text-sm py-2 gap-3 tracking-[1px] leading-5"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <svg
              className={`ml-4 shrink-0 transform origin-center transition duration-200 ease-out ${
                accordionOpen ? "!rotate-90" : ""
              }`}
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14.4844V1.93555C0 1.05664 1.02539 0.617188 1.66016 1.25195L7.91016 7.50195C8.30078 7.89258 8.30078 8.52734 7.91016 8.91797L1.66016 15.168C1.02539 15.8027 0 15.3633 0 14.4844Z"
                fill="#162534"
              />
            </svg>
          <span
            className={
              accordionOpen
                ?  "text-blue-700"
                : "text-black"
            }
          >
            {title}
          </span>
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
        <div className="overflow-hidden pl-4">
          <div className="py-6 sm:text-base text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}

const Accordion = () => {
  const faqs = [
    {
      title: "What is the pricing structure for your SaaS product?",
      text: (
        <>
          <p className="text-[15px]">
          Our SaaS product offers three pricing tiers: Basic, Pro, and Enterprise. The Basic plan starts at $10 per month and includes essential features. The Pro plan is $30 per month, offering advanced features and integrations. The Enterprise plan is custom-priced to fit large organizations' needs, including premium support and additional customizations. Discounts are available for annual subscriptions.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "How secure is my data with your SaaS product?",
      text: (
        <>
          <p className="text-[15px]">
          Security is our top priority. We use industry-standard encryption to protect your data both in transit and at rest. Our servers are hosted in secure data centers with 24/7 monitoring and regular security audits. Additionally, we comply with major data protection regulations such as GDPR and HIPAA to ensure your information remains confidential and secure.
          </p>
          
        </>
      ),
      active: false,
    },
    {
      title: "Can I integrate your SaaS product with other tools we use?",
      text: (
        <>
          <p className="text-[15px]">
          Yes, our SaaS product offers robust integration capabilities with a variety of third-party tools. We provide APIs and pre-built integrations for popular services like CRM systems, email marketing platforms, and project management tools. If you need a specific integration not currently supported, our development team can work with you to create a custom solution.
          </p>
          
        </>
      ),
      active: false,
    },
  ];
  return (
    <section className="">
      <div className="divide-y divide-slate-200 border border-slate-200 mt-5">
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
  )
};

export default Accordion;
