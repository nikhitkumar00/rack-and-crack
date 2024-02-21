const Rounds = () => {
  const rounds = [
    {
      name: "Ideation",
      date: "Feb 28",
      paragraph:
        "Participating teams are given problem statements fairly. Develop an innovative and efficient solution and create a presentation for the same and present it to expert judging panel. The authenticity and scope of the ideas will be evaluated, along with the quality and effectiveness of the solutions presented",
    },
    {
      name: "Prototyping and pitching",
      date: "Feb 29",
      paragraph:
        "The shortlisted teams from Round 1 will begin the prototyping session. During this round the teams are to create a prototype of their solution and then do a Business pitch to the judging panel. Money management, Investment, Marketing strategies and Mind map of a team will be evaluated here.",
    },
    {
      name: "Marketing",
      date: "Feb 29",
      paragraph:
        "Round 3 of the Belfort of Wall Street 2024 , will be conducted in an open area mode at Christ college of Engineering campus. All the selected teams have to be present at the campus where the audience will be your customer. Participants will have to interact with the audience and market their ideas/products. The winner of this round will be decided by audience poll.",
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col bg-hero-pattern p-10">
      <h1 className="p-10 text-center text-5xl font-extrabold text-white">
        Rounds
      </h1>
      <div className="flex w-full flex-1 flex-col items-start justify-start gap-10 text-black md:gap-5">
        {rounds.map((round, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-xl bg-gray-300 px-3 py-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold md:text-3xl">{round.name}</h3>
              <p className="text-xl font-bold md:text-2xl">{round.date}</p>
            </div>
            <p className="text-xl">{round.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rounds;
