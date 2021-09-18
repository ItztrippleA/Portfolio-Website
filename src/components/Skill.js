import { useState } from "react";

function Skill(skills) {
  const classCheck = (value) => {
    return `skills__percentage skills__${value} `;
  };

  const [touch, setTouch] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    touch === false ? setTouch(true) : setTouch(false);
  };

  const toggle = (value) => {
    // value ? "nav__menu show_menu" : "nav__menu";
    if (value === true) {
      return "skills__content skills__open";
    }
    return "skills__content skills__close";
  };
  return (
    <div className={toggle(touch)} onClick={handleClick}>
      {/* {console.log(skills.skills)} */}
      <div class="skills__header">
        <i class="uil uil-brackets-curly skills__icon"></i>
        <div>
          <h1 class="skills_title">{skills.skills.skill.title}</h1>
          <span class="skills__subtitle">More than 4 years</span>
        </div>
        <i class="uil uil-angle-down skills__arrow"></i>
      </div>
      <div class="skills__list grid">
        {skills.skills.skill.skills.map((skill) => {
          console.log(skill);
          return (
            <div class="skills__data">
              <div class="skills__titles">
                <h3 class="skills__name">{skill.tech}</h3>
                <span class="skills__number">{skill.per}%</span>
              </div>
              <div class="skills__bar">
                <span className={classCheck(skill.class)}></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
