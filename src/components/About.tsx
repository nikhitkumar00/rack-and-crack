export default function AboutComponent() {
  return (
    <div className="flex w-full flex-col gap-10 bg-[#171921] p-10 text-[#fff] md:p-20">
      <div>
        <h2 className="text-4xl font-extrabold">
          WHAT IS{" "}
          <span className="text-[#F0BB42]">
            BELLFORT OF <br /> WALL STREET
          </span>{" "}
          ?
        </h2>
      </div>
      <div className="flex flex-wrap gap-14">
        <div className="min-w-[200px] flex-1">
          <img src="/belfort.png" alt="" className="min-w-[300px]" />
        </div>
        <div className="min-w[200px] flex flex-1 flex-col justify-around gap-10">
          <p className="text-xl md:text-2xl">
            <span className="text-[#F0BB42]">Belfort of Wall Street </span>
            by IEDC CCE, is where innovation meets entrepreneurship in a
            thrilling competition aimed at transforming ideas into impactful
            ventures. Through three dynamic rounds –{" "}
            <span className="text-[#F0BB42]">Ideation, Prototyping </span>
            and{" "}
            <span className="text-[#F0BB42]">
              Business Pitching, and Marketing{" "}
            </span>
            participants showcase their creativity, business acumen, and
            marketing prowess.
          </p>
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-6xl font-bold text-[#F0BB42] ">30</p>
              <p className="text-xl font-bold uppercase">Hours</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-6xl font-bold text-[#F0BB42]">12K</p>
              <p className="text-xl font-bold uppercase">prize pool</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-6xl font-bold text-[#F0BB42]">28, 29</p>
              <p className="text-xl font-bold uppercase">February</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
