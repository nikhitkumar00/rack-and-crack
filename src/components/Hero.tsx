const Hero = () => {
  return (
    <div className="relative flex h-screen w-screen uppercase">
      <div className="flex flex-grow flex-col items-center justify-center p-16 sm:items-start">
        <h3 className="text-sm font-semibold sm:pl-2 lg:text-xl">Season 2</h3>
        <h2 className="text-center text-4xl font-bold sm:text-left md:text-6xl lg:text-8xl">
          Belfort of wallstreet
        </h2>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4KnimxwasGgDVW_EZJgrl8G2m3_yxPj9Tii0_FHMfs86yPQ/viewform"
          target="_blank"
          className="mt-8 cursor-pointer rounded-full bg-black px-4 py-2 font-semibold text-white hover:bg-slate-800 lg:px-8 lg:py-4 lg:text-xl"
        >
          Register now
        </a>
      </div>
      <div className="hidden h-5/6 w-2/6 flex-col justify-end gap-4 divide-y-8 rounded-bl-3xl bg-yellow-400 p-10 font-semibold tracking-wider sm:flex sm:text-4xl md:text-5xl lg:text-6xl">
        <div>Ideate</div>
        <div>design</div>
        <div>develop</div>
        <div>test</div>
        <div>pitch</div>
      </div>
      <div className="absolute bottom-16 left-0 rounded-r-2xl bg-black px-16 py-5 text-white">
        date <span className="font-bold">28,29</span> feb
      </div>
    </div>
  );
};

export default Hero;
