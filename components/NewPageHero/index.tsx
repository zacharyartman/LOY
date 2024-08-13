"use client";

const NewPageHero = ({titleText, link, position='bg-center'}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${link})`,
  };

  return (
    <>
      <section className={`overflow-hidden pb-20 mt-[90px] pt-20 xl:pb-25 bg-cover h-100 ${position}` }
      style={backgroundImageStyle}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h1 className="pt-2 xl:pt-8 text-3xl font-bold text-white dark:text-white text-hero pr-0 text-center">
            {titleText}
          </h1>
        </div>
      </section>
    </>
  );
};

export default NewPageHero;
