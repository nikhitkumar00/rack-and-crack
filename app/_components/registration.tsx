"use client";

import Image from "next/image";
const Registration = () => {
  return (
    <div className="flex flex-col justify-center gap-12 md:flex-row md:justify-between">
      <Image
        src="/images/poster.jpg"
        alt="Poster"
        width={640}
        height={640}
        priority
        className="mx-auto h-auto w-[60vw] max-w-72 object-contain lg:max-w-96"
      />

      <div className="flex w-full items-center justify-center">
        <div className="z-10 flex w-full max-w-lg flex-col gap-6 pb-6 lg:ml-auto">
          <div className="w-full rounded-xl border border-primary bg-primary bg-opacity-15 px-6 py-3 text-center font-secondary text-lg text-primary sm:px-0 sm:text-xl md:text-2xl xl:text-3xl">
            REGISTRATION
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="flex flex-wrap font-secondary text-[5.5vw] lowercase tracking-wider text-white sm:py-1 sm:text-[5.7vw] md:text-[38px]">
              Application&nbsp;
              <span className="whitespace-nowrap">closes on</span>
            </span>
            <span className="flex flex-wrap font-tertiary text-[5vw] font-medium tracking-wider text-white md:text-[64px]">
              <span className="whitespace-nowrap">FEB 25,&nbsp;</span>
              <span>2024</span>
            </span>
          </div>
          <button
            onClick={() =>
              window.open("https://forms.gle/8iPpCs3xeVsWq8gV8", "_blank")
            }
            className="w-full rounded-lg bg-primary px-6 py-3 font-secondary text-lg text-dark hover:bg-tertiary sm:text-xl md:text-2xl xl:text-3xl"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
