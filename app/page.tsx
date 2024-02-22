import { About, Hero, Registration } from "@/app/_components";
import SectionLayout from "@/layouts/section-layout";
import Guidelines from "./_components/guidlines";
import ProblemStatement from "./_components/problemStatement";
import Gallery from "./_components/gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionLayout full>
        <About />
      </SectionLayout>

      <SectionLayout>
        <Guidelines />
      </SectionLayout>

      <SectionLayout>
        <Registration />
      </SectionLayout>

      <SectionLayout>
        <ProblemStatement />
      </SectionLayout>

      <SectionLayout full gapless>
        <Gallery />
      </SectionLayout>
    </>
  );
}
