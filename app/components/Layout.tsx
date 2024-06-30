import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar";

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar border={false} />
      <MobileMenu navType="components" border={false} />
      <Sidebar />
      <main className="sm:ml-[15.5rem] p-4 h-screen">
        <div className="shadow-pageShadow py-6 sm:px-10 px-5 mt-12 rounded-lg h-full overflow-auto">
        {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
