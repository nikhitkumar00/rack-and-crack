import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Image from "next/image";
import Header from "../_components/header";

const Hero = () => {
  return (
    <section className="flex h-svh flex-col ">
      <Header />
      <SectionLayout full hero>
        <div className="my-auto flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <div className="flex flex-col gap-3 md:gap-6">
            <span className="text-center font-tertiary text-xl font-extrabold text-white md:text-3xl">
              9 MAR,&nbsp;
              <span className="text-primary">2024</span>
            </span>
            <Image
              src="/logos/rack-and-crack.svg"
              width={400}
              height={400}
              alt="Rack and Crack Logo"
              priority
              className="min-w-64 px-4"
            />
            <span className="text-center font-secondary text-xl lowercase text-white md:text-2xl">
              IDEA PITCHING COMPETITION
            </span>
          </div>

          <div className="flex flex-col px-2 text-center">
            <p className="font-tertiary text-7xl font-extrabold text-primary">
              55k
            </p>
            <p className="font-secondary text-xl lowercase text-white md:text-2xl">
              Prizepool
            </p>
          </div>
        </div>
      </SectionLayout>
      <TextMarquee />
    </section>
  );
};

export default Hero;
