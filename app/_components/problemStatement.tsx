import { CustomText } from "@/components/custom";

const ProblemStatement = () => {
  const problemStatements = [
    {
      qn: "Sustainable Construction Materials",
      ans: "Join us in revolutionising the construction industry towards sustainability! We're seeking innovative solutions to curb carbon emissions and reduce environmental footprints associated with construction materials. Dive into the realm of recycled materials, carbon capture or sequestration, and material alternatives to address challenges while fostering environmental stewardship. ",
    },
    {
      qn: "Structural Stability and Performance in Adverse Conditions ",
      ans: "Calling all problem solvers! In regions prone to natural calamities and affected by climate change, we're seeking resilient solutions. Join us in reinforcing structures with adaptable designs and materials. Let's implement redundancy and align policies to ensure safer, sustainable built environments resilient to adverse conditions. ",
    },
    {
      qn: "Structural Health Monitoring Techniques ",
      ans: "Be a part of the safety revolution! We're on the lookout for advanced techniques to enhance structural monitoring. Join us in leveraging sensing technologies and data analytics to ensure safer, resilient civil infrastructure. Early detection is key, and your innovative solutions can make a difference! ",
    },
    {
      qn: "Town Planning and Traffic Management with Artificial Intelligence",
      ans: "Attention innovators! Rapid urbanisation demands cutting-edge solutions. Dive into the world of artificial intelligence and revolutionise town planning and traffic management. Let's optimise resource utilisation, enhance traffic flow, and foster urban sustainability together. Your ideas can shape the cities of tomorrow! ",
    },
    {
      qn: "Microplastics Pollution: Sources, Impacts, and Remediation Strategies",
      ans: "Join the fight against microplastics pollution! Together, we can make a difference. Explore the sources, understand the impacts, and develop robust mitigation strategies. From improved waste management to innovative cleanup technologies, your solutions are crucial. Let's work hand in hand to protect our planet for future generations!",
    },
  ];
  return (
    <div className="z-10">
      <CustomText highlightedTitle>Problem Statements</CustomText>
      {problemStatements.map((statement, index) => (
        <div key={index} className="min-h-[300px]">
          <div className="py-10 font-secondary text-3xl">
            <span className="text-secondary">
              Problem Statement {index + 1}
            </span>{" "}
            : {statement.qn}
          </div>
          <div className="font-tertiary text-xl font-bold">{statement.ans}</div>
        </div>
      ))}
    </div>
  );
};

export default ProblemStatement;
