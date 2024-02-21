const Guidlines = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#171921] p-10">
      <h1 className="p-10 text-center text-5xl font-extrabold text-white">
        Guidelines
      </h1>
      <div className="flex flex-1 flex-col justify-center gap-4 text-xl text-white md:px-10 md:text-3xl">
        <div>
          Each team must consist of{" "}
          <span className="text-yellow-300">3 to 4 members</span>, and each
          members must be enrolled in any{" "}
          <span className="text-yellow-300">
            Undergraduate or Postgraduate Degree Programme
          </span>
          .
          <br />
          {"("}
          Students of MCA / IMCA are also permitted{")"}.
        </div>
        <div>
          {" "}
          <span className="text-yellow-300">
            Ethical conduct is expected, and plagiarism or using pre-existing
            solutions
          </span>{" "}
          without acknowledgment is strictly prohibited. Participants are
          supposed{" "}
          <span className="text-yellow-300">
            to bring their own gadgets as in Laptops and mobile phones
          </span>{" "}
          for presentation creation and surfing. They are also requested to{" "}
          <span className="text-yellow-300">
            bring their own network providers
          </span>
          .
        </div>
        <div>
          {" "}
          We will not be responsible for any network issues.{" "}
          <span className="text-yellow-300">
            Dinner and Breakfast will be provided on 28th and 29th
          </span>{" "}
          respectively for the teams that proceeds to the next rounds.
        </div>
      </div>
    </div>
  );
};

export default Guidlines;
