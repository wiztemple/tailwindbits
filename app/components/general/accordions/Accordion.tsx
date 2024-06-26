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
          <span className={`block ${accordionOpen ? "text-blue-700" : "text-gray-800"}`}>
            {title}
          </span>
          <svg
            className={`shrink-0 transform origin-center transition duration-200 ease-out ${
              accordionOpen ? "!rotate-180" : ""
            }`}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.21934 0.219534C0.0788894 0.360159 0 0.550783 0 0.749534C0 0.948284 0.0788894 1.13891 0.21934 1.27953L6.46934 7.52953C6.60997 7.66998 6.80059 7.74887 6.99934 7.74887C7.19809 7.74887 7.38871 7.66998 7.52934 7.52953L13.7793 1.27953C13.8489 1.20993 13.9042 1.12731 13.9418 1.03637C13.9795 0.94543 13.9989 0.847964 13.9989 0.749534C13.9989 0.651104 13.9795 0.553637 13.9418 0.4627C13.9042 0.371762 13.8489 0.289135 13.7793 0.219534C13.7097 0.149933 13.6271 0.094723 13.5362 0.0570555C13.4452 0.0193879 13.3478 -1.94029e-09 13.2493 0C13.1509 1.94029e-09 13.0534 0.0193879 12.9625 0.0570555C12.8716 0.094723 12.7889 0.149933 12.7193 0.219534L6.99934 5.93853L1.27934 0.219534C1.13871 0.0790835 0.948091 0.000193596 0.74934 0.000193596C0.550589 0.000193596 0.359965 0.0790835 0.21934 0.219534Z"
              fill="black"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-black overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-4 bg-slate-50 border-t border-t-slate-200">
          <div className="pb-6 pt-4">{children}</div>
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
      <div className="divide-y divide-slate-200 border border-slate-200 mt-5 rounded-lg">
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

export default Accordion;
