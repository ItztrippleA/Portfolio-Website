import { skillData } from "../data";
import Skill from "./Skill";

export default function Skills() {
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
