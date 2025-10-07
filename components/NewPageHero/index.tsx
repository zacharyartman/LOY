"use client";
import Image from "next/image";

const NewPageHero = ({ titleText, link, position = "bg-center" }) => {
  const getObjectPositionStyle = (bgClass: string) => {
    const arbitraryMatch = bgClass.match(/bg-\[([^\]]+)\]/);
    if (arbitraryMatch) {
      return arbitraryMatch[1].replace(/_/g, ' ');
    }
  
    if (bgClass.includes('bg-center')) return 'center';
    if (bgClass.includes('bg-top')) return 'top';
    if (bgClass.includes('bg-bottom')) return 'bottom';
    if (bgClass.includes('bg-left')) return 'left';
    if (bgClass.includes('bg-right')) return 'right';
    
    return 'center';
  };

  const objectPositionValue = getObjectPositionStyle(position);
  
  return (
    <>
      <section className="relative h-100 mt-[88px] overflow-hidden pb-20 pt-20 xl:pb-25">
        <Image
          src={link}
          alt={titleText}
          fill
          priority
          quality={95}
          className="object-cover"
          style={{ objectPosition: objectPositionValue }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
        />
        
        <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h1 className="pr-0 pt-2 text-center text-3xl text-hero font-bold text-white xl:pt-8">
            {titleText}
          </h1>
        </div>
      </section>
    </>
  );
};

export default NewPageHero;
