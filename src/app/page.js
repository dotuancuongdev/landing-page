import { Inter } from "next/font/google";
import ContactLogo from "./components/ContactLogo";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const ourPartnership = [
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/rxhdxfyvdkehx3fburkd.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/fnui1qjljfm4b01lwtgx.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/hrf24asuwhoezmixuy11.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/msnmldyfflmhcjuiuaoh.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/nzxc9xrghgxeljbeiqn3.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/e7hojckgncvrbx79spm5.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/xte10slgn2auyfywnhqd.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/jq9xhyzl4csgjqqkdwgj.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814527/rsyzosxstdcegwnpqob1.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814526/n3skakvmlzi4jsbovzwx.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814526/yvroe6ssehm8jph5tm6x.png",
  "https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728809656/m1irncftab22lngy6c4m.png",
];

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-10">
      <div className="flex justify-between items-center mt-5 gap-2">
        <div className="flex-1">
          <Image
            width={200}
            height={80}
            alt="logo"
            src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728815808/qma6ahlr8s5sjnhtkonr.png"
          />
        </div>

        <button className="bg-[#6966ff] rounded-md  h-auto flex-1 sm:max-w-40">
          <p className={`my-1  px-4 md:text-xl md:py-2 ${inter.className}`}>
            Launch App
          </p>
        </button>
      </div>

      <div className="text-center mt-16  flex flex-col  gap-2">
        <p className="text-2xl md:text-[64px] lg:text-[70px] xl:text-[90px]  font-black leading-10 md:leading-[64px] lg:leading-[70px] xl:leading-[100px]">
          Unlock the power of
        </p>
        <p className="text-2xl md:text-[64px] lg:text-[70px] xl:text-[90px]  font-black leading-10 md:leading-[64px] lg:leading-[70px] xl:leading-[100px]">
          decentralized organization
        </p>
      </div>

      <p
        className={`text-sm mx-auto mt-8 md:mt-16 lg:text-2xl font-semibold lg:w-[792px] leading-8 text-center ${inter.className}`}
      >
        Spinel is a DAO infrastructure that offers no-code tools and makes it
        easy to onboard communities onto Web3.
      </p>

      <ContactLogo justify="justify-center" />

      {/* Create your own investment squad */}
      <div className="mt-36 md:mt-52">
        <div className="text-center flex flex-col gap-4">
          <p className="sm:text-[40px] leading-10 text-xl font-black">
            Create your own investment squad
          </p>
          <p
            className={`sm:text-xl leading-7 text-[#bcbbca] ${inter.className}`}
          >
            Connect your wallet and create your investment squad in less than 60
            seconds. No coding experience required.
          </p>
        </div>
        <div className="mt-10 md:mt-20 md:flex md:mx-auto gap-10 justify-center">
          <div className="md:flex-1  my-3 w-full ">
            <Image
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814529/n0hzcznrnzzdtymtwnii.svg"
              alt="squad img"
              width={580}
              height={642}
              className="w-full"
            />
          </div>

          <div className="md:flex-1  my-3 w-full ">
            <Image
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814529/xpfxerytedzz2ghfrruu.svg"
              alt="squad img"
              width={580}
              height={642}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center mt-5 md:mt-11">
          <button className="bg-[#6966ff] rounded-md">
            <p className={` text-xl px-4 py-2 ${inter.className}`}>
              Get started
            </p>
          </button>
        </div>
      </div>

      {/*  Become a member of existing investment squads*/}
      <div className="mt-36 lg:flex gap-24">
        <div className=" flex-col justify-between xl:flex-[5] xl:flex lg:flex-[6]">
          <div className="flex flex-col justify-between gap-7">
            <p className="sm:text-[40px] md:text-center leading-10 text-xl font-black">
              Become a member of existing investment squads
            </p>
            <p
              className={`sm:text-xl md:text-center leading-7 text-[#bcbbca] ${inter.className}`}
            >
              Depending on your taste, either low cap, blue chip NFTs, or even
              web3 startup, you can easily choose the right squad for you.
            </p>
          </div>

          <div className="  my-3 md:w-full md:flex justify-center">
            <button className="bg-[#6966FF] rounded-md py-2 px-4">
              <p className="text-lg leading-[28px]">Investment squads</p>
            </button>
          </div>
        </div>

        <div className="md:w-full md:flex md:justify-center xl:flex-[7] lg:flex-[5]">
          <img
            src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814529/lwjnxbulyf9thfjubemp.svg"
            alt="investment-squads"
          />
        </div>
      </div>

      {/* Real-time digital asset management */}
      <div className="mt-36 lg:flex justify-center gap-10 hidden">
        <div className="flex-1 flex flex-col gap-3">
          <img src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814529/zfxi4gq0sk2gvcdcq7gz.png" />
          <img src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814528/baoolmf2nysit3ljr0jz.png" />
        </div>
        <div className="flex-1  flex  justify-center items-center">
          <div className="max-w-[441px] flex flex-col gap-7 items-end">
            <p className="sm:text-[40px] leading-10 text-xl font-black">
              Real-time digital asset management
            </p>
            <p
              className={`sm:text-xl leading-7 text-[#bcbbca] ${inter.className}`}
            >
              Manage your portfolio and keep track of how the value of your
              digital assets are changing. All in one single platform.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-36 justify-center lg:hidden">
        <div className="flex-1 flex items-center mb-5">
          <div className="xl:max-w-[441px] flex flex-col gap-7 xl:items-end ">
            <p className="sm:text-[40px] md:text-center leading-10 text-xl font-black">
              Real-time digital asset management
            </p>
            <p
              className={`sm:text-xl md:text-center leading-7 text-[#bcbbca] ${inter.className}`}
            >
              Manage your portfolio and keep track of how the value of your
              digital assets are changing. All in one single platform.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <img src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814529/zfxi4gq0sk2gvcdcq7gz.png" />
          <img src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814528/baoolmf2nysit3ljr0jz.png" />
        </div>
      </div>

      {/* Diversify your investment portfolio */}
      <div className="mt-36">
        <div className="flex flex-col gap-5 md:gap-7 items-center md:w-full md:justify-center ">
          <p className="sm:text-[40px] md:text-center leading-10 text-xl font-black">
            Diversify your investment portfolio
          </p>
          <p
            className={`sm:text-xl md:text-center leading-7 text-[#bcbbca] ${inter.className}`}
          >
            Invest easily in a variety of digital assets, including tokens, NFTs
            or other on chain - off chain assets.
          </p>
        </div>
        <div className="mt-11 md:mt-14">
          <img
            src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728824288/ikszt9507oe4vszix01i.png"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-36  lg:flex justify-between gap-10">
        <div className=" flex flex-col gap-7 justify-center items-center mb-5 lg:mb-0">
          <p className="sm:text-[40px] leading-10 text-xl font-black">
            Gasless governance
          </p>
          <p
            className={`sm:text-xl md:text-center leading-7 text-[#bcbbca] ${inter.className}`}
          >
            Propose, vote and execute major squad decisions on chain and at $0
            cost.
          </p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814528/lqmftrfudcvcn3s0orqz.png"
            className="w-full"
          />
        </div>
      </div>

      {/* Marketplace for squad assets */}
      <div className="mt-36">
        <div className="flex flex-col gap-4 md:items-center">
          <p className="sm:text-[40px] sm:leading-10 text-xl font-black">
            Marketplace for squad assets
          </p>
          <p
            className={`sm:text-xl leading-7 md:text-center text-[#bcbbca] ${inter.className}`}
          >
            Buy and sell squad assets, such as tokens and NFTs, on the
            marketplace.
          </p>
        </div>
        <div className="mt-10 md:mt-20 w-full flex flex-col sm:gap-5 lg:flex-row lg:gap-10 lg:justify-center">
          <div className="flex-1 my-2 w-full">
            <img
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814528/qcefy9tr2ttcaq76sakp.png"
              className="w-full"
            />
          </div>
          <div className="flex-1 my-2 w-full">
            <img
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1728814528/qg0cpsafgxiim7jwpegm.png"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex justify-center mt-7 md:mt-11">
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
          <p className="sm:text-[40px] sm:leading-10 text-xl font-black">
            Our partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 sm:mt-20 md:grid-cols-3 lg:grid-cols-4">
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
