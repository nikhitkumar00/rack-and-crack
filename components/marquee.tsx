import clsx from "clsx";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TextMarquee = () => {
  return (
    <Marquee
      autoFill
      className="bg-primary p-3 font-secondary text-3xl lowercase tracking-wider text-dark"
    >
      <Image
        src="/icons/dot.svg"
        width={8}
        height={8}
        alt="Dot"
        priority
        className="m-3 fill-dark"
      />
      <span className="px-2">Rack and Crack</span>
    </Marquee>
  );
};

export default TextMarquee;
