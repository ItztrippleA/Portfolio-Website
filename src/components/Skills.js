import Skill from "./Skill";

export default function Skills() {
  const skillData = [
    {
      id: 1,
      skill: {
        title: "Frontend developer / Languages",
        skills: [
          { tech: "HTML", per: 90, class: "html" },
          { tech: "CSS", per: 80, class: "css" },
          { tech: "JavaScript", per: 80, class: "javascript" },
          { tech: "React", per: 85, class: "react" },
          { tech: "Flutter", per: 65, class: "flutter" },
        ],
      },
    },
    {
      id: 2,
      skill: {
        title: "Backend developer/ Frameworks",
        skills: [
          { tech: "Node Js", per: 70, class: "nodeJs" },
          { tech: "Dart", per: 60, class: "dart" },
          { tech: "Firebase", per: 70, class: "firebase" },
          { tech: "Java", per: 85, class: "java" },
          { tech: "PHP", per: 45, class: "php" },
          { tech: "Next Js", per: 60, class: "nextJs" },
        ],
      },
    },
    {
      id: 3,
      skill: {
        title: "Mobile developer/ tools",
        skills: [
          { tech: "React-Native", per: 70, class: "reactNative" },
          { tech: "Flutter", per: 65, class: "flutter" },
          { tech: "Swift", per: 30, class: "swift" },
        ],
      },
    },
  ];

  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {skillData.map((skill, i) => {
            return <Skill skills={skill} key={skill.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
