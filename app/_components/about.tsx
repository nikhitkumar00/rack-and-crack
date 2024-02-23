import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-12 pt-10 text-right font-secondary text-secondary sm:px-12 sm:pt-20 md:pb-16 lg:px-16 lg:pb-24 xl:px-32 2xl:px-48">
      <CustomText title>
        what is&nbsp;
        <CustomText className="text-wrap text-left" highlightedTitle>
          rack and crack
        </CustomText>
        ?
      </CustomText>

      <CustomText description>
        Rack and Crack intends to catalyze a mega solution for some major
        dilemmas persisting in the field of Civil Engineering and Construction.
        Hosted in one of the most bustling hubs in Kerala, this idea-pitching
        contest is your finest shot at manifesting your problem-solving skills
        out to the world.
      </CustomText>
    </div>
  );
};

export default About;
