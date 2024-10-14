import React from "react";
import ContactLogo from "./ContactLogo";
import Image from "next/image";

const infomations = [
  "support@spinel.finance",
  "Spinel Labs Pte.Ltd",
  "20A Tanjong Pagar Road, Singapore",
];
const Footer = () => {
  return (
    <div className=" bg-[#151521] px-10 xl:px-28">
      <div className="pt-12">
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
      <div className="w-full h-[1px] bg-white bg-opacity-25 my-6" />

      <div className="md:flex md:justify-between md:items-center pb-16">
        <div className="flex items-center gap-3">
          <Image
            src="/whitelogo1.svg"
            alt="logo"
            height={58}
            width={58}
            className="mb-3 md:mb-0"
          />
          <p className="text-[32px] leading-[32px] font-medium">Spinel</p>
        </div>
        <div>
          <p className="text-sm leading-5 font-medium">
            Copyright © 2022 Spinel Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
