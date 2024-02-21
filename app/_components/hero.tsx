import { CustomText } from "@/components/custom";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex h-fit items-center justify-center overflow-hidden pt-8 sm:pt-12">
      <div className="flex h-fit flex-col items-center justify-evenly gap-4 overflow-hidden md:flex-row md:justify-center md:gap-0 md:px-8 lg:justify-center lg:gap-[6%] lg:px-36 xl:gap-[10%] xl:px-48">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col">
            <span className="text-center font-tertiary text-3xl font-extrabold text-white">
              9 MAR,&nbsp;
              <span className="text-tertiary">2024</span>
            </span>

            <Image
              src="/logos/rack-and-crack.svg"
              width={560}
              height={560}
              alt="Designathon Logo"
              priority
              className="my-16"
            />

            {/* <span className="text-center font-secondary text-2xl lowercase tracking-wider text-primary">
              BIGGER<span className="text-secondary">.&nbsp;</span>GRANDER
              <span className="text-secondary">.&nbsp;</span>WILDER
              <span className="text-secondary">.</span>
            </span> */}
          </div>
          <div className="flex flex-wrap justify-evenly gap-4">
            <div className="flex flex-col px-2 text-center">
              <p className="font-tertiary text-6xl font-extrabold text-tertiary">
                55k
              </p>
              <p className="font-secondary text-xl lowercase text-white md:text-2xl">
                Prizepool
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
