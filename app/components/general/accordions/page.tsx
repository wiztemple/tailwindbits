import DisplayLayout from "../../DisplayLayout";
import Layout from "../../Layout";
import Accordion from "./Accordion";
import { AccordionCodeStrings } from "./AccordionCodeStrings";
import Accordionv2 from "./Accordionv2";

const Accordions = () => {
  const accordionCodeString = AccordionCodeStrings["Accordion"];
  return (
    <Layout>
      <h1 className="text-2xl text-main-200 font-semibold pb-3">Accordions</h1>
      <div className="border border-slate-200 rounded-lg p-2">
        <DisplayLayout fileName="Accordions" codeString={accordionCodeString}>
          <Accordion />
        </DisplayLayout>
        <DisplayLayout fileName="Accordions" codeString={accordionCodeString}>
          <Accordionv2 />
        </DisplayLayout>
      </div>
    </Layout>
  );
};

export default Accordions;
