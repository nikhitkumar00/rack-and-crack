import { Header } from "@/app/_components";
import { CustomLink } from "@/components/custom";

const Copyright = () => {
  return (
    <div className="relative flex min-h-16 items-center justify-center overflow-clip">
      
      <Header type="secondary" />

      <div className="absolute z-10">
        <span className="sm:text-md flex flex-wrap items-center justify-center font-tertiary text-sm text-white md:text-lg">
          <span className="whitespace-nowrap">Copyright © 2024&nbsp;</span>
          <CustomLink
            href="https://cce.edu.in/department/associations/1"
            className="whitespace-nowrap text-primary"
          >
            Community Of Developers.&nbsp;
          </CustomLink>
          <span className="whitespace-nowrap">All Rights Reserved</span>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
