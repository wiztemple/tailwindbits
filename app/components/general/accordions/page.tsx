import DisplayLayout from "../../DisplayLayout";
import Layout from "../../Layout";
import Accordion from "./Accordion";
import { AccordionCodeStrings } from "./AccordionCodeStrings";


const Accordions = () => {
  const accordionCodeString = AccordionCodeStrings["Accordion"];
  return (
    <Layout>
      <DisplayLayout title="Accordions" codeString={accordionCodeString}>
        <Accordion />
      </DisplayLayout>
    </Layout>
  );
};

export default Accordions;
