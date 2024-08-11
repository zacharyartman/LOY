"use client";
import Image from "next/image";

const NewPageHero = ({titleText, link}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${link})`,
  };

  return (
    <>
      <section className={`overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-cover bg-center h-100` }
      style={backgroundImageStyle}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h1 className="pt-8 text-3xl font-bold text-white dark:text-white text-hero pr-0 text-center">
            {titleText}
          </h1>
        </div>
      </section>
    </>
  );
};

export default NewPageHero;
