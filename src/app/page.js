import { Inter } from "next/font/google";
import ContactLogo from "./components/ContactLogo";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const ourPartnership = [
  "/our-partnerships/image13.png",
  "/our-partnerships/image14.png",
  "/our-partnerships/image15.png",
  "/our-partnerships/image16.png",
  "/our-partnerships/image17.png",
  "/our-partnerships/image18.png",
  "/our-partnerships/image19.png",
  "/our-partnerships/image20.png",
  "/our-partnerships/image21.png",
  "/our-partnerships/image22.png",
  "/our-partnerships/image23.png",
  "/our-partnerships/image24.png",
];
export default function Home() {
  return (
    <div className="px-28">
      <div className="flex justify-between items-center mt-5 ">
        <Image
          width={200}
          height={80}
          alt="logo"
          src="/Logo-Spinel-opt2.png"
          className="h-auto"
        />
        <button className="bg-[#6966ff] rounded-md  h-auto">
          <p className={` text-xl px-4 py-2 ${inter.className}`}>Launch App</p>
        </button>
      </div>

      <div className="text-center mt-16 leading-[80px] flex flex-col gap-7 ">
        <p className="text-[90px] font-black ">Unlock the power of</p>
        <p className="text-[90px] font-black ">decentralized organization</p>
      </div>

      <p
        className={`mx-auto mt-16 text-2xl font-semibold w-[792px] leading-8 text-center ${inter.className}`}
      >
        Spinel is a DAO infrastructure that offers no-code tools and makes it
        easy to onboard communities onto Web3.
      </p>

      <ContactLogo justify="justify-center" />

      {/* Create your own investment squad */}
      <div className="mt-52">
        <div className="text-center flex flex-col gap-4">
          <p className="text-[40px] leading-10 font-black">
            Create your own investment squad
          </p>
          <p className={`text-xl leading-7 text-[#bcbbca] ${inter.className}`}>
            Connect your wallet and create your investment squad in less than 60
            seconds. No coding experience required.
          </p>
        </div>
        <div className="flex gap-10 justify-center mt-20">
          <Image src="/squad1.svg" alt="squad img" width={580} height={642} />
          <Image src="/squad2.svg" alt="squad img" width={580} height={642} />
        </div>
        <div className="flex justify-center mt-11">
          <button className="bg-[#6966ff] rounded-md">
            <p className={` text-xl px-4 py-2 ${inter.className}`}>
              Get started
            </p>
          </button>
        </div>
      </div>

      {/*  Become a member of existing investment squads*/}
      <div className="mt-36 flex gap-24">
        <div className="flex-[5] flex flex-col justify-between">
          <div className="flex flex-col justify-between gap-7">
            <p className="text-[40px] leading-[48px] font-black">
              Become a member of existing investment squads
            </p>
            <p className="text-[20px] leading-[28px] text-[#BCBBCA] font-medium">
              Depending on your taste, either low cap, blue chip NFTs, or even
              web3 startup, you can easily choose the right squad for you.
            </p>
          </div>

          <button className="bg-[#6966FF] rounded-md px-4 py-2 max-w-52">
            <p className="text-lg leading-[28px]">Investment squads</p>
          </button>
        </div>

        <div className="flex-[7]">
          <img src="/investment-squads.png" alt="investment-squads" />
        </div>
      </div>

      {/* Real-time digital asset management */}
      <div className="mt-36 flex justify-center">
        <div className="flex-1 flex flex-col gap-3">
          <img src="/Group-27283-1.png" />
          <img src="/Group-27246-3.png" />
        </div>
        <div className="flex-1  flex  justify-center items-center">
          <div className="max-w-[441px] flex flex-col gap-7 items-end">
            <p className="text-[40px] leading-[48px] font-black">
              Real-time digital asset management
            </p>
            <p className="text-[20px] leading-[28px] text-[#BCBBCA] font-medium">
              Manage your portfolio and keep track of how the value of your
              digital assets are changing. All in one single platform.
            </p>
          </div>
        </div>
      </div>

      {/* Diversify your investment portfolio */}
      <div className="mt-36">
        <div className="flex flex-col gap-7 items-center">
          <p className="text-[40px] leading-[40px] font-black">
            Diversify your investment portfolio
          </p>
          <p className="text-[20px] leading-[28px] font-medium text-[#BCBBCA]">
            Invest easily in a variety of digital assets, including tokens, NFTs
            or other on chain - off chain assets.
          </p>
        </div>
        <div className="mt-14">
          <img src="/table.png" className="w-full" />
        </div>
      </div>

      <div className="mt-36 flex justify-between ">
        <div className=" flex flex-col gap-7 justify-center max-w-[441px]">
          <p className="text-[40px] leading-[48px] font-black">
            Gasless governance
          </p>
          <p className="text-[20px] leading-[28px] font-medium text-[#BCBBCA]">
            Propose, vote and execute major squad decisions on chain and at $0
            cost.
          </p>
        </div>
        <div className="">
          <img src="/buy-azuki.png" className="w-full" />
        </div>
      </div>

      {/* Marketplace for squad assets */}
      <div className="mt-36">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-[40px] leading-[48px] font-black">
            Marketplace for squad assets
          </p>
          <p className="text-[20px] leading-[28px] font-medium text-[#BCBBCA]">
            Buy and sell squad assets, such as tokens and NFTs, on the
            marketplace.
          </p>
        </div>
        <div className="mt-20 flex gap-10">
          <img src="/table27300.png" className="flex-1" />
          <img src="/table27299.png" className="flex-1" />
        </div>

        <div className="flex justify-center mt-11">
          <button className="bg-[#6966ff] rounded-md">
            <p className={` text-xl px-4 py-2 ${inter.className}`}>
              Enter marketplace
            </p>
          </button>
        </div>
      </div>

      {/* Our partnerships */}
      <div className="mt-32">
        <div className="text-center">
          <p className="text-[40px] leading-[40px] font-black">
            Our partnerships
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-20">
          {ourPartnership.map((logo, idx) => (
            <div
              className="bg-white rounded-md h-40 flex justify-center items-center"
              key={idx}
            >
              <img src={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
