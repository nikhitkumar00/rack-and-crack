import { About, Header, Hero, Registration } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Guidelines from "./_components/guidlines";
import ProblemStatement from "./_components/problemStatement";
import Gallery from "./_components/gallery";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />

        <SectionLayout full gapless>
          <Hero />
        </SectionLayout>
        <TextMarquee />

        <SectionLayout>
          <Guidelines />
        </SectionLayout>
      </div>

      <SectionLayout>
        <Registration />
      </SectionLayout>

      <SectionLayout>
        <ProblemStatement />
      </SectionLayout>

      <SectionLayout full>
        <Gallery />
      </SectionLayout>
    </>
  );
}
