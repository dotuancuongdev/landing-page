import React from "react";
import ContactLogo from "./ContactLogo";

const infomations = [
  "support@spinel.finance",
  "Spinel Labs Pte.Ltd",
  "20A Tanjong Pagar Road, Singapore",
];
const Footer = () => {
  return (
    <div className="bg-[#151521] px-28">
      <div className="mt-12 ml-[120px]">
        <p className="text-sm leading-5 font-medium">
          For more information, partnership and press inquiries:
        </p>
        <div>
          {infomations.map((text) => (
            <p key={text} className="text-base font-semibold">
              {text}
            </p>
          ))}
        </div>
      </div>
      <ContactLogo center={false} />
    </div>
  );
};

export default Footer;
