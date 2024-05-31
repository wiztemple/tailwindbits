// componentCodeStrings.ts
export const AccordionCodeStrings: { [key: string]: string } = {
  Accordion: `
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
          className="flex items-center w-full font-bold text-left sm:text-lg text-sm py-2 gap-3 tracking-[1px] uppercase leading-5"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={\`accordion-text-\${id}\`}
        >
          <svg
              className={\`ml-4 shrink-0 transform origin-center transition duration-200 ease-out \${accordionOpen ? "!rotate-90" : ""}\`}
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14.4844V1.93555C0 1.05664 1.02539 0.617188 1.66016 1.25195L7.91016 7.50195C8.30078 7.89258 8.30078 8.52734 7.91016 8.91797L1.66016 15.168C1.02539 15.8027 0 15.3633 0 14.4844Z"
                fill="#FFF"
              />
            </svg>
          <span
            className={accordionOpen ? "text-blue-700" : "text-black"}
          >
            {title}
          </span>
        </button>
      </h2>
      <div
        id={\`accordion-text-\${id}\`}
        role="region"
        aria-labelledby={\`accordion-title-\${id}\`}
        className={\`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out \${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}\`}
      >
        <div className="overflow-hidden pl-4">
          <p className="py-6 sm:text-base text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}

const Accordion = () => {
  const faqs = [
    {
      title: "LASERTAG ABLAUF",
      text: (
        <>
          <p className="text-[15px]">
            Bei der Ankunft in der Lasertag Arena werdet ihr von unserem
            freundlichen Team herzlich empfangen. Nach einer kurzen Begrüßung
            und einer Einweisung in die Regeln des Spiels werdet ihr mit euren
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "HOLOGATE ABLAUF",
      text: (
        <>
          <p className="text-[15px]">
            Wenn ihr die Hologate Arena besucht, erwartet euch ein fantastisches
            VR-Erlebnis, das von der Ankunft bis zum Ende des Aufenthalts für
            Begeisterung sorgt. Sobald ihr angekommen seid, werdet ihr herzlich
            von unserem freundlichen Team begrüßt. Ihr erhaltet eine kurze
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
            id={\`faqs-\${index}\`}
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
`,
};
