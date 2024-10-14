import React from "react";
import Image from "next/image";
const ContactLogo = ({ center = true }) => {
  const contactLogos = ["/Group57.svg", "/Group50.svg", "/Group56.svg"];
  return (
    <div
      className={`flex gap-10 mt-10 md:mt-16 ${center ? "justify-center" : ""}`}
    >
      {contactLogos.map((logo) => (
        <Image
          key={logo}
          src={logo}
          height={40}
          width={40}
          alt="logo"
          className="w-8 sm:w-10"
        />
      ))}
    </div>
  );
};

export default ContactLogo;
