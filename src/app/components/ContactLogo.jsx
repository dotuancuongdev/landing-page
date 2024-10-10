import React from "react";
import Image from "next/image";
const ContactLogo = ({ center = true }) => {
  const contactLogos = ["/Group57.svg", "/Group50.svg", "/Group56.svg"];
  return (
    <div className={`flex ${center ? "justify-center" : ""} gap-10 mt-16`}>
      {contactLogos.map((logo) => (
        <Image key={logo} src={logo} height={40} width={40} alt="logo" />
      ))}
    </div>
  );
};

export default ContactLogo;
