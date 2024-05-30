import DisplayLayout from "../../DisplayLayout";
import Layout from "../../Layout";

const Accordions = () => {
  return (
   <Layout>
    <DisplayLayout title="Accordions">
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div>
                  <div className="text-xl font-medium text-black">
                    Tailwind Component
                  </div>
                  <p className="text-gray-500">
                    This is a sample Tailwind component.
                  </p>
                </div>
              </div>
    </DisplayLayout>
   </Layout>
  )
}

export default Accordions;
