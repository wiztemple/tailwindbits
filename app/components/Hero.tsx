const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 pt-40 sm:pb-40 pb-20 bg-white dark:bg-[#0B1023]">
      <div className="sm:px-10 px-5">
        <h1 className="sm:text-5xl font-bold text-xl text-main-100 dark:text-blue-200">Build Beautiful UIs with TailwindCSS</h1>
        <h2 className="pt-5 text-main-300 font-medium dark:text-blue-300">
          Get ready-to-use, responsive, and accessible components for your
          website or app in React, Vue, Angular and HTML. Simply integrate them
          into your Tailwind CSS project with a quick copy and paste.
        </h2>
      </div>
      <div>&nbsp;</div>
    </div>
  );
};

export default Hero;
