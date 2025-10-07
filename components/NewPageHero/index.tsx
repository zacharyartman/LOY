"use client";

const NewPageHero = ({ titleText, link, position = "bg-center" }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${link})`,
  };

  return (
    <>
      <section
        className={`h-100 mt-[88px] overflow-hidden bg-cover pb-20 pt-20 xl:pb-25 ${position}`}
        style={backgroundImageStyle}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h1 className="pr-0 pt-2 text-center text-3xl text-hero font-bold text-white xl:pt-8">
            {titleText}
          </h1>
        </div>
      </section>
    </>
  );
};

export default NewPageHero;
