interface HeaderProps {
  type?: "primary" | "secondary";
}

const Header = ({ type = "primary" }: HeaderProps) => {
  return type === "primary" ? (
    <div className="text-stroke-white z-10 flex h-12 w-full items-center justify-center overflow-clip border-b border-quarternary bg-dark font-primary text-[10vw] text-transparent sm:h-16 md:h-20 xl:h-24">
      <span className="w-full text-center opacity-30">Rack and Crack</span>
    </div>
  ) : (
    <div className="text-stroke-white flex h-24 w-full justify-center overflow-clip border-b border-quarternary text-center font-primary text-xxl leading-none text-transparent">
      <span className="relative bottom-40 opacity-30">Rack and Crack</span>
    </div>
  );
};

export default Header;
