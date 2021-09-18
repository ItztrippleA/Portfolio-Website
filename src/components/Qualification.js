import React from "react";
import { useState } from "react";

function Qualification() {
  const [isEducationActive, setisEducationActive] = useState(true);

  const handleEdu = () => {
    setisEducationActive(true);
  };
  const handleWrk = () => {
    setisEducationActive(false);
  };

  return (
    <section class="qualification section">
      <h2 class="section__title">Qualification</h2>
      <span class="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex qualification__active`}
            data-target="#education"
            onClick={handleEdu}
          >
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            class={`qualification__button button--flex`}
            data-target="#work"
            onClick={handleWrk}
          >
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div class="qualification__sections">
          {/* (!--==================== QUALIFICATION CONTENT 1 =====E==E==Z==== */}
          {isEducationActive ? (
            <div
              class="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* < ! - -========= QUALIFICATION 1===== */}
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Computer Enginner</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009-2014
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* < ! - -========= QUALIFICATION 2===== */}
              <div class="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 class="qualification__title">Web Design</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009 - 2014
                  </div>
                </div>
              </div>

              {/* < ! - -========= QUALIFICATION 3===== */}
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Computer Enginner</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009-2014
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* < ! - -========= QUALIFICATION 4===== */}
              <div class="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                  <h3 class="qualification__title">Computer Enginner</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009 2014
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              class="qualification__content qualification__active"
              data-content
              id="work"
            >
              {/* < ! - -========= QUALIFICATION 1===== */}
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Computer Enginner</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009-2014
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* < ! - -========= QUALIFICATION 2===== */}
              <div class="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 class="qualification__title">Front-end dev</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009 - 2014
                  </div>
                </div>
              </div>

              {/* < ! - -========= QUALIFICATION 3===== */}
              <div class="qualification__data">
                <div>
                  <h3 class="qualification__title">Computer Enginner</h3>
                  <span class="qualification__subtitle">Peru University</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2009-2014
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
