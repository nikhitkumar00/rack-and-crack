import { About, Header, Hero } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Guidelines from "./_components/guidlines";
import ProblemStatement from "./_components/problemStatement";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />

        <SectionLayout full gapless>
          <Hero />
          <About />
        </SectionLayout>
        <TextMarquee />

        <SectionLayout>
          <Guidelines />
        </SectionLayout>
      </div>

      <SectionLayout>
        <ProblemStatement />
      </SectionLayout>
    </>
  );
}
