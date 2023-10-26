"use client";
import Image from "next/image";
const ImageSwitcher = () => {
  return (
    <>
      <div className="bigScreenImg hidden md:block px-5 pt-5">
        {/* Renderiza essa imagem em telas maiores */}
        <Image
          src="/pattern-divider-desktop.svg"
          alt="Divider Desktop"
          width={444}
          height={16}
          layout="responsive"
        />
      </div>

      <div className=" smallScreenImg md:hidden sm:block">
        {/* Renderiza essa imagem em telas menores */}
        <Image
          src="/pattern-divider-mobile.svg"
          alt="Divider Mobile"
          width={295}
          height={16}
          layout="responsive"
        />
      </div>
    </>
  );
};
export default ImageSwitcher;