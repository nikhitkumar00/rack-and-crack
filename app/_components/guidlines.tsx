import { CustomText } from "@/components/custom";
import { cutoutCity } from "@/public/fonts";

const Guidelines = () => {
  const guidelines = [
    "A team can include maximum 3 members",
    "Apply for the event and send us the abstract of your idea. You may also send images, videos to substantiate your abstract.",
    "Selected teams will be intimated and they can present the idea before the evaluation panel on 9th March 2024",
    "College ID card is mandatory for participation",
    "Decision of the judges will be final",
  ];
  return (
    <div className="flex w-full flex-col items-start justify-center gap-12 font-primary text-secondary">
      <CustomText title>
        RULES AND&nbsp;<CustomText highlightedTitle>Regulations</CustomText>
      </CustomText>

      <div className="mb-6 flex w-full flex-col gap-6 sm:mb-12 sm:items-start lg:mb-0">
        {guidelines.map((text, index) => (
          <CustomText description key={index}>
            <div className="flex">
              <span className="block tracking-widest text-primary sm:inline">
                ✺&nbsp;&nbsp;
              </span>
              <span className="font-semibold">{text}</span>
            </div>
          </CustomText>
        ))}
      </div>

      <div className="ml-auto flex w-fit justify-center rounded-xl border border-primary bg-primary bg-opacity-10 px-6 py-2 sm:min-w-80 sm:px-12 sm:py-4">
        <span className="text-center font-secondary text-xl lowercase tracking-wider text-primary sm:text-2xl">
          Venue of finale : Crowne Plaza, Cochin
        </span>
      </div>
    </div>
  );
};

export default Guidelines;
